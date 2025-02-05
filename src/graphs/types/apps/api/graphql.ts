import type { GraphQLResolveInfo } from "graphql";
import type { ApiContext } from "./context.ts";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> =
  & Omit<T, K>
  & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> =
  { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
    [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  user?: Maybe<UserMutations>;
};

export type UserAuthMutation = {
  __typename?: "UserAuthMutation";
  login?: Maybe<UserAuthed>;
  register?: Maybe<UserAuthed>;
};

export type UserAuthMutationLoginArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type UserAuthMutationRegisterArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type UserAuthed = {
  __typename?: "UserAuthed";
  jwtToken?: Maybe<Scalars["String"]["output"]>;
  userMeta?: Maybe<UserMeta>;
};

export type UserCexAccountMutation = {
  __typename?: "UserCexAccountMutation";
  addAccount?: Maybe<UserId>;
  editAccount?: Maybe<UserId>;
  removeAccount?: Maybe<UserId>;
};

export type UserCexAccountMutationAddAccountArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type UserCexAccountMutationEditAccountArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type UserCexAccountMutationRemoveAccountArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type UserChangePasswordInput = {
  confirmPassword: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  password: Scalars["String"]["input"];
};

export type UserId = {
  __typename?: "UserId";
  id?: Maybe<Scalars["ID"]["output"]>;
};

export type UserLoginInput = {
  nick: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type UserMeta = {
  __typename?: "UserMeta";
  id?: Maybe<Scalars["ID"]["output"]>;
  nick?: Maybe<Scalars["String"]["output"]>;
};

export type UserMutations = {
  __typename?: "UserMutations";
  auth?: Maybe<UserAuthMutation>;
  cexAccount?: Maybe<UserCexAccountMutation>;
  password?: Maybe<UserPassMutation>;
};

export type UserPassMutation = {
  __typename?: "UserPassMutation";
  changePassword?: Maybe<UserId>;
};

export type UserPassMutationChangePasswordArgs = {
  input?: InputMaybe<UserLoginInput>;
};

export type UserRegisterInput = {
  confirmPassword: Scalars["String"]["input"];
  nick: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
    ...args: any[]
  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  UserAuthMutation: ResolverTypeWrapper<UserAuthMutation>;
  UserAuthed: ResolverTypeWrapper<UserAuthed>;
  UserCexAccountMutation: ResolverTypeWrapper<UserCexAccountMutation>;
  UserChangePasswordInput: UserChangePasswordInput;
  UserId: ResolverTypeWrapper<UserId>;
  UserLoginInput: UserLoginInput;
  UserMeta: ResolverTypeWrapper<UserMeta>;
  UserMutations: ResolverTypeWrapper<UserMutations>;
  UserPassMutation: ResolverTypeWrapper<UserPassMutation>;
  UserRegisterInput: UserRegisterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  String: Scalars["String"]["output"];
  UserAuthMutation: UserAuthMutation;
  UserAuthed: UserAuthed;
  UserCexAccountMutation: UserCexAccountMutation;
  UserChangePasswordInput: UserChangePasswordInput;
  UserId: UserId;
  UserLoginInput: UserLoginInput;
  UserMeta: UserMeta;
  UserMutations: UserMutations;
  UserPassMutation: UserPassMutation;
  UserRegisterInput: UserRegisterInput;
};

export type MutationResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["Mutation"] =
    ResolversParentTypes["Mutation"],
> = {
  user?: Resolver<
    Maybe<ResolversTypes["UserMutations"]>,
    ParentType,
    ContextType
  >;
};

export type UserAuthMutationResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserAuthMutation"] =
    ResolversParentTypes["UserAuthMutation"],
> = {
  login?: Resolver<
    Maybe<ResolversTypes["UserAuthed"]>,
    ParentType,
    ContextType,
    Partial<UserAuthMutationLoginArgs>
  >;
  register?: Resolver<
    Maybe<ResolversTypes["UserAuthed"]>,
    ParentType,
    ContextType,
    Partial<UserAuthMutationRegisterArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthedResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserAuthed"] =
    ResolversParentTypes["UserAuthed"],
> = {
  jwtToken?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  userMeta?: Resolver<
    Maybe<ResolversTypes["UserMeta"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCexAccountMutationResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserCexAccountMutation"] =
    ResolversParentTypes["UserCexAccountMutation"],
> = {
  addAccount?: Resolver<
    Maybe<ResolversTypes["UserId"]>,
    ParentType,
    ContextType,
    Partial<UserCexAccountMutationAddAccountArgs>
  >;
  editAccount?: Resolver<
    Maybe<ResolversTypes["UserId"]>,
    ParentType,
    ContextType,
    Partial<UserCexAccountMutationEditAccountArgs>
  >;
  removeAccount?: Resolver<
    Maybe<ResolversTypes["UserId"]>,
    ParentType,
    ContextType,
    Partial<UserCexAccountMutationRemoveAccountArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIdResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserId"] =
    ResolversParentTypes["UserId"],
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMetaResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserMeta"] =
    ResolversParentTypes["UserMeta"],
> = {
  id?: Resolver<Maybe<ResolversTypes["ID"]>, ParentType, ContextType>;
  nick?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMutationsResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserMutations"] =
    ResolversParentTypes["UserMutations"],
> = {
  auth?: Resolver<
    Maybe<ResolversTypes["UserAuthMutation"]>,
    ParentType,
    ContextType
  >;
  cexAccount?: Resolver<
    Maybe<ResolversTypes["UserCexAccountMutation"]>,
    ParentType,
    ContextType
  >;
  password?: Resolver<
    Maybe<ResolversTypes["UserPassMutation"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPassMutationResolvers<
  ContextType = ApiContext,
  ParentType extends ResolversParentTypes["UserPassMutation"] =
    ResolversParentTypes["UserPassMutation"],
> = {
  changePassword?: Resolver<
    Maybe<ResolversTypes["UserId"]>,
    ParentType,
    ContextType,
    Partial<UserPassMutationChangePasswordArgs>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ApiContext> = {
  Mutation?: MutationResolvers<ContextType>;
  UserAuthMutation?: UserAuthMutationResolvers<ContextType>;
  UserAuthed?: UserAuthedResolvers<ContextType>;
  UserCexAccountMutation?: UserCexAccountMutationResolvers<ContextType>;
  UserId?: UserIdResolvers<ContextType>;
  UserMeta?: UserMetaResolvers<ContextType>;
  UserMutations?: UserMutationsResolvers<ContextType>;
  UserPassMutation?: UserPassMutationResolvers<ContextType>;
};
