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

export type UserAuthActions = {
  login: UserAuthed;
  register: UserAuthed;
};


export type UserAuthActionsLoginArgs = {
  input: UserLoginInput;
};


export type UserAuthActionsRegisterArgs = {
  input: UserLoginInput;
};

export type UserAuthed = {
  jwtToken: Scalars['String']['output'];
  userMeta: UserMeta;
};

export type UserChangePasswordInput = {
  confirmPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserId = {
  id: Scalars['Int']['output'];
};

export type UserLoginInput = {
  nick: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserMeta = {
  id: Scalars['Int']['output'];
  nick: Scalars['String']['output'];
};

export type UserMutations = {
  auth: UserAuthActions;
  password: UserPassActions;
};

export type UserPassActions = {
  changePassword: UserId;
};


export type UserPassActionsChangePasswordArgs = {
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
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserAuthActions: ResolverTypeWrapper<UserAuthActions>;
  UserAuthed: ResolverTypeWrapper<UserAuthed>;
  UserChangePasswordInput: UserChangePasswordInput;
  UserId: ResolverTypeWrapper<UserId>;
  UserLoginInput: UserLoginInput;
  UserMeta: ResolverTypeWrapper<UserMeta>;
  UserMutations: ResolverTypeWrapper<UserMutations>;
  UserPassActions: ResolverTypeWrapper<UserPassActions>;
  UserRegisterInput: UserRegisterInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  String: Scalars['String']['output'];
  UserAuthActions: UserAuthActions;
  UserAuthed: UserAuthed;
  UserChangePasswordInput: UserChangePasswordInput;
  UserId: UserId;
  UserLoginInput: UserLoginInput;
  UserMeta: UserMeta;
  UserMutations: UserMutations;
  UserPassActions: UserPassActions;
  UserRegisterInput: UserRegisterInput;
};

export type MutationResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['Mutation']> = {
  user: Resolver<ResolversTypes['UserMutations'], ParentType, ContextType>;
};

export type UserAuthActionsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserAuthActions']> = {
  login: Resolver<ResolversTypes['UserAuthed'], ParentType, ContextType, RequireFields<UserAuthActionsLoginArgs, 'input'>>;
  register: Resolver<ResolversTypes['UserAuthed'], ParentType, ContextType, RequireFields<UserAuthActionsRegisterArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAuthedResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserAuthed']> = {
  jwtToken: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userMeta: Resolver<ResolversTypes['UserMeta'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserIdResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserId']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMetaResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserMeta']> = {
  id: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nick: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserMutationsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserMutations']> = {
  auth: Resolver<ResolversTypes['UserAuthActions'], ParentType, ContextType>;
  password: Resolver<ResolversTypes['UserPassActions'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPassActionsResolvers<ContextType = ApiContext, ParentType = ResolversParentTypes['UserPassActions']> = {
  changePassword: Resolver<ResolversTypes['UserId'], ParentType, ContextType, RequireFields<UserPassActionsChangePasswordArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApiAllTypes<ContextType = ApiContext> = {
  Mutation: MutationResolvers<ContextType>;
  UserAuthActions: UserAuthActionsResolvers<ContextType>;
  UserAuthed: UserAuthedResolvers<ContextType>;
  UserId: UserIdResolvers<ContextType>;
  UserMeta: UserMetaResolvers<ContextType>;
  UserMutations: UserMutationsResolvers<ContextType>;
  UserPassActions: UserPassActionsResolvers<ContextType>;
};

export type ApiResolvers = Pick<ApiAllTypes, 'UserAuthActions' | 'UserPassActions'>
export type UserAuthActionsPicked = Pick<ApiAllTypes, 'UserAuthActions'>;
export type UserPassActionsPicked = Pick<ApiAllTypes, 'UserPassActions'>;