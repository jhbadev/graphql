

export const typeDefs = `#graphql 
"Type User"
type User  {
  "ID de User"
    id: ID
    name: String
    username: String
    email: String
    address: Address
 

}


type Address {
  city: String
  street: String
  zipcode: String

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
    user: [User]
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