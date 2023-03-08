const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('post');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('post');
    },
    posts: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { postid }) => {
      return Post.findOne({ _id: postid });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
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
    addPost: async (parent, { posttext, postauthor }) => {
      const post = await Post.create({ posttext, postauthor });

      await User.findOneAndUpdate(
        { email: postauthor },
        { $addToSet: { posts: Post._id } }
      );

      return thought;
    },
    // addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     {
    //       $addToSet: { comments: { commentText, commentAuthor } },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     }
    //   );
    // },
    removePost: async (parent, { postid }) => {
      return Thought.findOneAndDelete({ _id: postid });
    },
    // removeComment: async (parent, { thoughtId, commentId }) => {
    //   return Thought.findOneAndUpdate(
    //     { _id: thoughtId },
    //     { $pull: { comments: { _id: commentId } } },
    //     { new: true }
    //   );
    // },
  },
};

module.exports = resolvers;
