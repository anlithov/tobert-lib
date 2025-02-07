export const apiTypeDefs: string = `schema {
  mutation: Mutation
}

type Mutation {
  user: UserMutations!
}

type UserAuthActions {
  login(input: UserLoginInput!): UserAuthed!
  register(input: UserLoginInput!): UserAuthed!
}

type UserAuthed {
  jwtToken: String!
  userMeta: UserMeta!
}

input UserChangePasswordInput {
  confirmPassword: String!
  password: String!
}

type UserId {
  id: Int!
}

input UserLoginInput {
  nick: String!
  password: String!
}

type UserMeta {
  id: Int!
  nick: String!
}

type UserMutations {
  auth: UserAuthActions!
  password: UserPassActions!
}

type UserPassActions {
  changePassword(input: UserLoginInput!): UserId!
}

input UserRegisterInput {
  confirmPassword: String!
  nick: String!
  password: String!
}`;
