import { gql } from '@apollo/client';

export const QUERY_QUOTE = gql`
query Query {
  quote
}
`
export const QUERY_ME = gql`
query Query {
  me {
    _id
    firstName
    lastName
    email
    password
    createdAt
    updatedAt
    currentMood {
      _id
      numericV
      stringV
    }
    days {
      _id
      date
      dayOfWeek
      mood {
        _id
        numericV
        stringV
      }
    }
    dailyHabits {
      _id
      name
      daysOfWeek {
        day
        toDo
      }
    }
    friends {
      _id
      firstName
      lastName
    }
  }
}
`;

