import type { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';
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

export type UserAuthMutations = {
  login: UserAuthed;
  register: UserAuthed;
};


export type UserAuthMutationsLoginArgs = {
  input: UserLoginInput;
};


export type UserAuthMutationsRegisterArgs = {
  input: UserLoginInput;
};

export type UserAuthed = {
  jwtToken: Scalars['String']['output'];
  userMeta: UserMeta;
};

export type UserCexAccountMutations = {
  addAccount: Maybe<UserId>;
  editAccount: Maybe<UserId>;
  removeAccount: Maybe<UserId>;
};


export type UserCexAccountMutationsAddAccountArgs = {
  input: UserLoginInput;
};


export type UserCexAccountMutationsEditAccountArgs = {
  input: UserLoginInput;
};


export type UserCexAccountMutationsRemoveAccountArgs = {
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
  auth: UserAuthMutations;
  cexAccount: UserCexAccountMutations;
  password: UserPassMutations;
};

export type UserPassMutations = {
  changePassword: UserId;
};


export type UserPassMutationsChangePasswordArgs = {
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

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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
  UserAuthMutations: ResolverTypeWrapper<UserAuthMutations>;
  UserAuthed: ResolverTypeWrapper<UserAuthed>;
  UserCexAccountMutations: ResolverTypeWrapper<UserCexAccountMutations>;
  UserChangePasswordInput: UserChangePasswordInput;
  UserId: ResolverTypeWrapper<UserId>;
  UserLoginInput: UserLoginInput;
  UserMeta: ResolverTypeWrapper<UserMeta>;
  UserMutations: ResolverTypeWrapper<UserMutations>;
  UserPassMutations: ResolverTypeWrapper<UserPassMutations>;
  UserRegisterInput: UserRegisterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Mutation: {};
  String: Scalars['String']['output'];
  UserAuthMutations: UserAuthMutations;
  UserAuthed: UserAuthed;
  UserCexAccountMutations: UserCexAccountMutations;
  UserChangePasswordInput: UserChangePasswordInput;
  UserId: UserId;
  UserLoginInput: UserLoginInput;
  UserMeta: UserMeta;
  UserMutations: UserMutations;
  UserPassMutations: UserPassMutations;
  UserRegisterInput: UserRegisterInput;
};

export type MutationResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['Mutation']> = {
  user: Resolver<ResolversTypes['UserMutations'], ParentType, ContextType>;
};

export type UserAuthMutationsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserAuthMutations']> = {
  login: Resolver<ResolversTypes['UserAuthed'], ParentType, ContextType, RequireFields<UserAuthMutationsLoginArgs, 'input'>>;
  register: Resolver<ResolversTypes['UserAuthed'], ParentType, ContextType, RequireFields<UserAuthMutationsRegisterArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthedResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserAuthed']> = {
  jwtToken: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userMeta: Resolver<ResolversTypes['UserMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserCexAccountMutationsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserCexAccountMutations']> = {
  addAccount: Resolver<Maybe<ResolversTypes['UserId']>, ParentType, ContextType, RequireFields<UserCexAccountMutationsAddAccountArgs, 'input'>>;
  editAccount: Resolver<Maybe<ResolversTypes['UserId']>, ParentType, ContextType, RequireFields<UserCexAccountMutationsEditAccountArgs, 'input'>>;
  removeAccount: Resolver<Maybe<ResolversTypes['UserId']>, ParentType, ContextType, RequireFields<UserCexAccountMutationsRemoveAccountArgs, 'input'>>;
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
  auth: Resolver<ResolversTypes['UserAuthMutations'], ParentType, ContextType>;
  cexAccount: Resolver<ResolversTypes['UserCexAccountMutations'], ParentType, ContextType>;
  password: Resolver<ResolversTypes['UserPassMutations'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPassMutationsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserPassMutations']> = {
  changePassword: Resolver<ResolversTypes['UserId'], ParentType, ContextType, RequireFields<UserPassMutationsChangePasswordArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApiAllTypes<ContextType = ApiContext> = {
  Mutation: MutationResolvers<ContextType>;
  UserAuthMutations: UserAuthMutationsResolvers<ContextType>;
  UserAuthed: UserAuthedResolvers<ContextType>;
  UserCexAccountMutations: UserCexAccountMutationsResolvers<ContextType>;
  UserId: UserIdResolvers<ContextType>;
  UserMeta: UserMetaResolvers<ContextType>;
  UserMutations: UserMutationsResolvers<ContextType>;
  UserPassMutations: UserPassMutationsResolvers<ContextType>;
};

export type ApiResolvers = Pick<ApiAllTypes, 'UserAuthMutations' | 'UserCexAccountMutations' | 'UserMutations' | 'UserPassMutations'>
export type UserAuthMutationsPicked = Pick<ApiAllTypes, 'UserAuthMutations'>;
export type UserCexAccountMutationsPicked = Pick<ApiAllTypes, 'UserCexAccountMutations'>;
export type UserMutationsPicked = Pick<ApiAllTypes, 'UserMutations'>;
export type UserPassMutationsPicked = Pick<ApiAllTypes, 'UserPassMutations'>;