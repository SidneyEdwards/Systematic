const { gql } = require('apollo-server-express');

const typeDefs = gql`

  scalar Date

  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    createdAt: String
    updatedAt: String
    currentMood: Mood!
    days: [Day]
    dailyHabits: [DailyHabit]
    friends: [User]
  }

  type Mood {
    _id: ID!
    numericV: Int!
    stringV: String!
  }

  type Day {
    _id: ID!
    date: String
    dayOfWeek: String
    mood: Mood!
    user: User
  }

  type DayOfWeek {
    day: String
    toDo: Boolean
  }

  type DailyHabit {
    _id: ID!
    name: String!
    daysOfWeek: [DayOfWeek]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    currentMood(_id: ID): Mood
    users: [User]
    moods: [Mood]
    days: [Day]
    dailyHabits: [DailyHabit]
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addMood(numericV: Int!): Mood
    addDailyHabit(name: String!): DailyHabit
    addDay: Day
  }
`;

module.exports = typeDefs;
