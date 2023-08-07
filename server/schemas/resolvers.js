const { Day, Mood, User, DailyHabit } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { dateScalar } = require('./scalar');

async function getQuote() {
  const response = await fetch('https://zenquotes.io/api/today');
  const json = await response.json();
  const qtext = JSON.stringify(json[0].q + " - " + json[0].a);
  console.log(qtext);
  return qtext;
}

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }
      const data = await User.findById(context.user._id).populate([
        {
          path: 'days',
          populate: {
            path: 'mood'
          }
        },
        {
          path: 'dailyHabits',
          populate: {
            path: 'daysOfWeek'
          }
        },
        {
          path: 'friends'
        },
        {
          path: 'currentMood'
        }
      ])

      return data;
    },
    quote: async (parent, args, context) => {
      return await getQuote();
    },
    currentMood: async (parent, args, context) => {
      return await Mood.findById(args);
    },
    users: async (parent, args, context) => {
      return await User.find({})
      .populate('currentMood')
      .populate({
        path: 'days',
        populate: { path: 'mood' }
      });
    },
    moods: async (parent, args, context) => {
      return await Mood.find({});
    },
    days: async (parent, args, context) => {
      return await Day.find({}).populate('mood');
    },
    dailyHabits: async (parent, args, context) => {
      return await DailyHabit.find({});
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      try {


        const md = await Mood.findOne({numericV: 2});
        const usr = await User.create({firstName: firstName, lastName: lastName, email: email, password: password, days: [], currentMood: md});
        const dy = await Day.create({user: usr, mood: usr.currentMood});
        await User.updateOne(usr,{$push: {days: dy}});
        const token = signToken(usr);
        return { token, usr };
      } catch (err) {
        console.log(err);
        throw new UserInputError('Incomplete Fields')
      }
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addMood: async (parent, argObj) => {
      try {
        return await Mood.create(argObj);
      } catch (err) {
        console.log(err);
        throw new UserInputError('Incomplete Fields')
      }
    },
    addDailyHabit: async (parent, argObj) => {
      try {
        return await DailyHabit.create(argObj);
      } catch (err) {
        console.log(err);
        throw new UserInputError('Incomplete Fields')
      }
    },
    addManyDailyHabits: async (parent, { namesArr }, context) => {
      if(!context.user) throw new AuthenticationError('Incorrect credentials');

      try {

        const moddedNamesArr = namesArr.map((name) => ({ name }));

        const allHabitsData = await DailyHabit.insertMany(moddedNamesArr);

        const habitIds = allHabitsData.map(({ _id }) => _id);

        const userData = await User.findOneAndUpdate(
          {
          _id: context.user._id,
          },
          {
            $push: { dailyHabits: { $each: habitIds }}
          }
        );

        return allHabitsData;

      } catch (err) {
        console.log(err);
        throw new UserInputError('Incomplete Fields')
      }
    },
    // addDay: async (parent, argObj) => {
    //   try {
    //     let usr = await User.findOne(argObj);
    //     return await Day.create({user: usr, mood: usr.currentMood});
    //   } catch (err) {
    //     console.log(err);
    //     throw new UserInputError('Incomplete Fields')
    //   }
    // },
    addDay: async (parent, argObj) => {
      try {
        const md = await Mood.findOne({numericV: 1});
        return await Day.create({mood: md});
      } catch (err) {
        console.log(err);
        throw new UserInputError('Incomplete Fields')
      }
    },
  }
};

module.exports = resolvers;
