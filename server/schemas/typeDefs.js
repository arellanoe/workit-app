const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String!
    password: String
    posts: [Post]!
  }
  type Post {
    _id: ID
    posttext: String
    postauthor: String
    createdat: String
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    users: [User]
    post(email: String): [Post]
  }
  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(posttext: String!): Post
  }
`;
// addComment(
//     thoughtId: ID!
//     commentText: String!
//     commentAuthor: String!
//   ): Thought
//   removeThought(thoughtId: ID!): Thought
//   removeComment(thoughtId: ID!, commentId: ID!): Thought
// }
// I removed     email(email: String!): email from type query
module.exports = typeDefs;
