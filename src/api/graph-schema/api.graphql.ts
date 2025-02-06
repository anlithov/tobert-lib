export const typeDefs = `schema {
  mutation: Mutation
}

type Mutation {
  user: UserMutations
}

type UserAuthMutation {
  login(input: UserLoginInput): UserAuthed
  register(input: UserLoginInput): UserAuthed
}

type UserAuthed {
  jwtToken: String
  userMeta: UserMeta
}

type UserCexAccountMutation {
  addAccount(input: UserLoginInput): UserId @auth
  editAccount(input: UserLoginInput): UserId @auth
  removeAccount(input: UserLoginInput): UserId @auth
}

input UserChangePasswordInput {
  confirmPassword: String!
  id: ID
  password: String!
}

type UserId {
  id: ID
}

input UserLoginInput {
  nick: String!
  password: String!
}

type UserMeta {
  id: ID
  nick: String
}

type UserMutations {
  auth: UserAuthMutation
  cexAccount: UserCexAccountMutation
  password: UserPassMutation
}

type UserPassMutation {
  changePassword(input: UserLoginInput): UserId
}

input UserRegisterInput {
  confirmPassword: String!
  nick: String!
  password: String!
}`;
