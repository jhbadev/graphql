export const typeDefs = `#graphql 

"Type User"
type User  {
  "ID de User"
    id: ID
    name: String
    email: String
    role: Role
}

input UserID{
  uid: ID
}

input ArticleID{
  uid: ID
}

type Role {
  name: String
}

type Query {
    users: [User]
    user(id: UserID!): User
}

type Query {
  articles: [Article]
  article(id: ArticleID!): Article
}

type Article {
  id: ID
  item: String
  quality: Int
}
`;