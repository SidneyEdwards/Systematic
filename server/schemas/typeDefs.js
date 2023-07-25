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
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(firstName: String, lastName: String, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
