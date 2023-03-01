const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    blogposts: [Blog]!
  }

  type Blog {
    _id: ID
    email: String
    title: String
    date: String
    body: String
  }



  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    email(email: String!): email
    blog(email: String): [Blog]
  }

  type Mutation {
    addUser( email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, body: String!): Blog

`;
// addComment(
//     thoughtId: ID!
//     commentText: String!
//     commentAuthor: String!
//   ): Thought
//   removeThought(thoughtId: ID!): Thought
//   removeComment(thoughtId: ID!, commentId: ID!): Thought
// }

module.exports = typeDefs;
