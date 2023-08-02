const { Day, Mood, User, DailyHabit } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { dateScalar } = require('./scalar');

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not logged in');
      }
      return await User.findById(context.user._id)
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
