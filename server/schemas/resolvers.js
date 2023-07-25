const { User } = require('../models');
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
  },
  Mutation: {
    addUser: async (parent, argObj) => {
      try {
        const user = await User.create(argObj);
        const token = signToken(user);
        return { token, user };
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
  }
};

module.exports = resolvers;
