import type { GraphQLResolveInfo } from 'graphql';
import type { ApiContext } from './context.ts';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  user: UserMutations;
};

export type UserAuthMutation = {
  login: UserAuthed;
  register: UserAuthed;
};


export type UserAuthMutationLoginArgs = {
  input: UserLoginInput;
};


export type UserAuthMutationRegisterArgs = {
  input: UserLoginInput;
};

export type UserAuthed = {
  jwtToken: Scalars['String']['output'];
  userMeta: UserMeta;
};

export type UserCexAccountMutation = {
  addAccount: Maybe<UserId>;
  editAccount: Maybe<UserId>;
  removeAccount: Maybe<UserId>;
};


export type UserCexAccountMutationAddAccountArgs = {
  input: UserLoginInput;
};


export type UserCexAccountMutationEditAccountArgs = {
  input: UserLoginInput;
};


export type UserCexAccountMutationRemoveAccountArgs = {
  input: UserLoginInput;
};

export type UserChangePasswordInput = {
  confirmPassword: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};

export type UserId = {
  id: Scalars['ID']['output'];
};

export type UserLoginInput = {
  nick: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserMeta = {
  id: Scalars['ID']['output'];
  nick: Scalars['String']['output'];
};

export type UserMutations = {
  auth: UserAuthMutation;
  cexAccount: UserCexAccountMutation;
  password: UserPassMutation;
};

export type UserPassMutation = {
  changePassword: UserId;
};


export type UserPassMutationChangePasswordArgs = {
  input: UserLoginInput;
};

export type UserRegisterInput = {
  confirmPassword: Scalars['String']['input'];
  nick: Scalars['String']['input'];
  password: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
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
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  String: Scalars['String']['output'];
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

export type MutationResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['Mutation']> = {
  user: Resolver<ResolversTypes['UserMutations'], ParentType, ContextType>;
};

export type UserAuthMutationResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserAuthMutation']> = {
  login: Resolver<ResolversTypes['UserAuthed'], ParentType, ContextType, RequireFields<UserAuthMutationLoginArgs, 'input'>>;
  register: Resolver<ResolversTypes['UserAuthed'], ParentType, ContextType, RequireFields<UserAuthMutationRegisterArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthedResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserAuthed']> = {
  jwtToken: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userMeta: Resolver<ResolversTypes['UserMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCexAccountMutationResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserCexAccountMutation']> = {
  addAccount: Resolver<Maybe<ResolversTypes['UserId']>, ParentType, ContextType, RequireFields<UserCexAccountMutationAddAccountArgs, 'input'>>;
  editAccount: Resolver<Maybe<ResolversTypes['UserId']>, ParentType, ContextType, RequireFields<UserCexAccountMutationEditAccountArgs, 'input'>>;
  removeAccount: Resolver<Maybe<ResolversTypes['UserId']>, ParentType, ContextType, RequireFields<UserCexAccountMutationRemoveAccountArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIdResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserId']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMetaResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserMeta']> = {
  id: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nick: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMutationsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserMutations']> = {
  auth: Resolver<ResolversTypes['UserAuthMutation'], ParentType, ContextType>;
  cexAccount: Resolver<ResolversTypes['UserCexAccountMutation'], ParentType, ContextType>;
  password: Resolver<ResolversTypes['UserPassMutation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPassMutationResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserPassMutation']> = {
  changePassword: Resolver<ResolversTypes['UserId'], ParentType, ContextType, RequireFields<UserPassMutationChangePasswordArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApiResolvers<ContextType = ApiContext> = {
  Mutation: MutationResolvers<ContextType>;
  UserAuthMutation: UserAuthMutationResolvers<ContextType>;
  UserAuthed: UserAuthedResolvers<ContextType>;
  UserCexAccountMutation: UserCexAccountMutationResolvers<ContextType>;
  UserId: UserIdResolvers<ContextType>;
  UserMeta: UserMetaResolvers<ContextType>;
  UserMutations: UserMutationsResolvers<ContextType>;
  UserPassMutation: UserPassMutationResolvers<ContextType>;
};

