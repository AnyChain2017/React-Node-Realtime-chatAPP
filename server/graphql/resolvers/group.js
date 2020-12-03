const { Conversation, User } = require('../../models');
const { Op } = require('sequelize');
const { UserInputError } = require('apollo-server');
const authChecker = require('../../utils/authChecker');

module.exports = {
  Mutation: {
    createGroup: async (_, args, context) => {
      const loggedUser = authChecker(context);
      const { name } = args;

      if (name.trim() === '') {
        throw new UserInputError('Name field must not be empty.');
      }

      const group = await Conversation.create({
        name,
        admin: loggedUser.id,
        type: 'group',
        participants: [loggedUser.id],
      });

      return group;
    },
  },
};
