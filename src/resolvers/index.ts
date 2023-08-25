import { ApolloServerErrorCode } from "@apollo/server/errors";



export const resolvers = {
  Query: {
    users: () => [],
    user: (parent, args, { dataSources }, info) => {
      return dataSources.usersAPI.getUsers();
    },
  },
};
