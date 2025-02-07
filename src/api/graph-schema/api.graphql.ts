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

type UserCexAccountActions {
  addAccount(input: UserLoginInput!): UserId
  editAccount(input: UserLoginInput!): UserId
  removeAccount(input: UserLoginInput!): UserId
}

input UserChangePasswordInput {
  confirmPassword: String!
  id: ID!
  password: String!
}

type UserId {
  id: ID!
}

input UserLoginInput {
  nick: String!
  password: String!
}

type UserMeta {
  id: ID!
  nick: String!
}

type UserMutations {
  auth: UserAuthActions!
  cexAccount: UserCexAccountActions!
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
