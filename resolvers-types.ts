import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Agency = {
  __typename?: 'Agency';
  elections?: Maybe<Array<Maybe<Election>>>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  software?: Maybe<Scalars['String']>;
  urlToken?: Maybe<Scalars['String']>;
};

export type AgencyItemInput = {
  name: Scalars['String'];
};

export type BallotItem = {
  __typename?: 'BallotItem';
  district?: Maybe<Scalars['String']>;
  jurisdiction?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Candidate = {
  __typename?: 'Candidate';
  election?: Maybe<Election>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  office?: Maybe<Scalars['String']>;
};

export type Committee = {
  __typename?: 'Committee';
  ballotItems?: Maybe<Array<Maybe<BallotItem>>>;
  electionId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CreateAgenciesInput = {
  agencyItems: Array<AgencyItemInput>;
  software?: InputMaybe<Scalars['String']>;
};

export type CreateAgencyInput = {
  name: Scalars['String'];
  software: Scalars['String'];
  urlToken: Scalars['String'];
};

export type CreateCandidateInput = {
  electionId: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  office: Scalars['String'];
};

export type CreateElectionInput = {
  agencyId: Scalars['String'];
  date: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type CreateElectionsInput = {
  agencyId: Scalars['String'];
  electionItems: Array<ElectionItemInput>;
};

export type Election = {
  __typename?: 'Election';
  agency?: Maybe<Agency>;
  agencyId?: Maybe<Scalars['String']>;
  candidate?: Maybe<Array<Maybe<Candidate>>>;
  committee?: Maybe<Array<Maybe<Committee>>>;
  date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ElectionFilters = {
  agencyId: Scalars['String'];
  electionYear?: InputMaybe<Scalars['String']>;
};

export type ElectionItemInput = {
  date: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAgencies?: Maybe<Array<Maybe<Agency>>>;
  createAgency?: Maybe<Agency>;
  createCandidate?: Maybe<Candidate>;
  createElection?: Maybe<Election>;
  createElections?: Maybe<Array<Maybe<Election>>>;
  deleteAgency?: Maybe<Agency>;
  deleteElection?: Maybe<Scalars['String']>;
};


export type MutationCreateAgenciesArgs = {
  input: CreateAgenciesInput;
};


export type MutationCreateAgencyArgs = {
  input: CreateAgencyInput;
};


export type MutationCreateCandidateArgs = {
  input: CreateCandidateInput;
};


export type MutationCreateElectionArgs = {
  input: CreateElectionInput;
};


export type MutationCreateElectionsArgs = {
  input: CreateElectionsInput;
};


export type MutationDeleteAgencyArgs = {
  id: Scalars['String'];
};


export type MutationDeleteElectionArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  agencies: Array<Agency>;
  agency?: Maybe<Agency>;
  election?: Maybe<Election>;
  elections: Array<Election>;
};


export type QueryAgencyArgs = {
  id: Scalars['String'];
};


export type QueryElectionArgs = {
  id: Scalars['String'];
};


export type QueryElectionsArgs = {
  filters?: InputMaybe<ElectionFilters>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


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
export type ResolversTypes = ResolversObject<{
  Agency: ResolverTypeWrapper<Agency>;
  AgencyItemInput: AgencyItemInput;
  BallotItem: ResolverTypeWrapper<BallotItem>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Candidate: ResolverTypeWrapper<Candidate>;
  Committee: ResolverTypeWrapper<Committee>;
  CreateAgenciesInput: CreateAgenciesInput;
  CreateAgencyInput: CreateAgencyInput;
  CreateCandidateInput: CreateCandidateInput;
  CreateElectionInput: CreateElectionInput;
  CreateElectionsInput: CreateElectionsInput;
  Election: ResolverTypeWrapper<Election>;
  ElectionFilters: ElectionFilters;
  ElectionItemInput: ElectionItemInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Agency: Agency;
  AgencyItemInput: AgencyItemInput;
  BallotItem: BallotItem;
  Boolean: Scalars['Boolean'];
  Candidate: Candidate;
  Committee: Committee;
  CreateAgenciesInput: CreateAgenciesInput;
  CreateAgencyInput: CreateAgencyInput;
  CreateCandidateInput: CreateCandidateInput;
  CreateElectionInput: CreateElectionInput;
  CreateElectionsInput: CreateElectionsInput;
  Election: Election;
  ElectionFilters: ElectionFilters;
  ElectionItemInput: ElectionItemInput;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
}>;

export type AgencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Agency'] = ResolversParentTypes['Agency']> = ResolversObject<{
  elections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Election']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  software?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  urlToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BallotItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['BallotItem'] = ResolversParentTypes['BallotItem']> = ResolversObject<{
  district?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jurisdiction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CandidateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Candidate'] = ResolversParentTypes['Candidate']> = ResolversObject<{
  election?: Resolver<Maybe<ResolversTypes['Election']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommitteeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Committee'] = ResolversParentTypes['Committee']> = ResolversObject<{
  ballotItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['BallotItem']>>>, ParentType, ContextType>;
  electionId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ElectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Election'] = ResolversParentTypes['Election']> = ResolversObject<{
  agency?: Resolver<Maybe<ResolversTypes['Agency']>, ParentType, ContextType>;
  agencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  candidate?: Resolver<Maybe<Array<Maybe<ResolversTypes['Candidate']>>>, ParentType, ContextType>;
  committee?: Resolver<Maybe<Array<Maybe<ResolversTypes['Committee']>>>, ParentType, ContextType>;
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createAgencies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Agency']>>>, ParentType, ContextType, RequireFields<MutationCreateAgenciesArgs, 'input'>>;
  createAgency?: Resolver<Maybe<ResolversTypes['Agency']>, ParentType, ContextType, RequireFields<MutationCreateAgencyArgs, 'input'>>;
  createCandidate?: Resolver<Maybe<ResolversTypes['Candidate']>, ParentType, ContextType, RequireFields<MutationCreateCandidateArgs, 'input'>>;
  createElection?: Resolver<Maybe<ResolversTypes['Election']>, ParentType, ContextType, RequireFields<MutationCreateElectionArgs, 'input'>>;
  createElections?: Resolver<Maybe<Array<Maybe<ResolversTypes['Election']>>>, ParentType, ContextType, RequireFields<MutationCreateElectionsArgs, 'input'>>;
  deleteAgency?: Resolver<Maybe<ResolversTypes['Agency']>, ParentType, ContextType, RequireFields<MutationDeleteAgencyArgs, 'id'>>;
  deleteElection?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationDeleteElectionArgs, 'id'>>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  agencies?: Resolver<Array<ResolversTypes['Agency']>, ParentType, ContextType>;
  agency?: Resolver<Maybe<ResolversTypes['Agency']>, ParentType, ContextType, RequireFields<QueryAgencyArgs, 'id'>>;
  election?: Resolver<Maybe<ResolversTypes['Election']>, ParentType, ContextType, RequireFields<QueryElectionArgs, 'id'>>;
  elections?: Resolver<Array<ResolversTypes['Election']>, ParentType, ContextType, Partial<QueryElectionsArgs>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Agency?: AgencyResolvers<ContextType>;
  BallotItem?: BallotItemResolvers<ContextType>;
  Candidate?: CandidateResolvers<ContextType>;
  Committee?: CommitteeResolvers<ContextType>;
  Election?: ElectionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

