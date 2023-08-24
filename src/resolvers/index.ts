import { ApolloServerErrorCode } from "@apollo/server/errors";
import { GraphQLError } from "graphql";
import { users, articles } from "../data/index";

export const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args, context, info) => {
      const { uid } = args.id;
      // return users.filter((user) => user.id === uid);
      console.log(args);
      console.log(context);
      const user = users.find((user) => user.id === uid);
 
      console.log(user)
        if (!user) {
          console.log('indefinido')
          return {
            message: "error",
            status: 400,
          };
        } else  return user;
    },
    articles: () => articles,
    article: (parent, args, context, info) => {
      const { uid } = args.id;
      console.log(args);
      console.log(context);
      return articles.find((article) => article.id === uid);
    },
  },
};
