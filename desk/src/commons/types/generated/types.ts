export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type TBoard = {
  __typename?: 'Board';
  comments?: Maybe<TComment>;
  description: Scalars['String'];
  hashtags?: Maybe<Array<THashtag>>;
  id: Scalars['String'];
  likers?: Maybe<Array<TUser>>;
  products: Array<TProduct>;
  recommend?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  viewers?: Maybe<Array<TUser>>;
  writer: TUser;
};

export type TComment = {
  __typename?: 'Comment';
  board: TBoard;
  content: Scalars['String'];
  id: Scalars['String'];
  user: Scalars['String'];
};

export type TCreateBoardInput = {
  createProductInputs: Array<TCreateProductInput>;
  description: Scalars['String'];
  hashtags: Array<Scalars['String']>;
  recommend?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type TCreateProductInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type TCreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type TFollowing = {
  __typename?: 'Following';
  followingid: Scalars['String'];
  id: Scalars['String'];
  users: Array<TUser>;
};

export type THashtag = {
  __typename?: 'Hashtag';
  boards: Array<TBoard>;
  hashtag: Scalars['String'];
  id: Scalars['String'];
};

export type TLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type TMatchAuthInput = {
  authNumber: Scalars['String'];
  email: Scalars['String'];
};

export type TMutation = {
  __typename?: 'Mutation';
  authEmail: Scalars['Boolean'];
  createBoard: TBoard;
  createUser: TUser;
  deleteUser: Scalars['Boolean'];
  logOut: Scalars['String'];
  login: Scalars['String'];
  matchAuthNumber: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateBoard: TBoard;
  updateFollowing: Scalars['Boolean'];
  updateUser: TUser;
};


export type TMutationAuthEmailArgs = {
  email: Scalars['String'];
};


export type TMutationCreateBoardArgs = {
  createBoardInput: TCreateBoardInput;
};


export type TMutationCreateUserArgs = {
  createUserInput: TCreateUserInput;
};


export type TMutationLoginArgs = {
  loginInput: TLoginInput;
};


export type TMutationMatchAuthNumberArgs = {
  matchAuthInput: TMatchAuthInput;
};


export type TMutationResetUserPasswordArgs = {
  resetPasswordInput: TResetPasswordInput;
};


export type TMutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: TUpdateBoardInput;
};


export type TMutationUpdateFollowingArgs = {
  followingid: Scalars['String'];
};


export type TMutationUpdateUserArgs = {
  updateUserInput: TUpdateUserInput;
};

export type TProduct = {
  __typename?: 'Product';
  board: TBoard;
  id: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type TQuery = {
  __typename?: 'Query';
  fetchBoard: Scalars['String'];
  fetchFollowings: Array<TUser>;
  fetchYoutube: Array<TYoutube>;
};


export type TQueryFetchFollowingsArgs = {
  userid: Scalars['String'];
};

export type TResetPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type TSnsAccount = {
  __typename?: 'SnsAccount';
  id: Scalars['String'];
  sns: Scalars['String'];
  user: TUser;
};

export type TUpdateBoardInput = {
  description: Scalars['String'];
  hashtags: Array<Scalars['String']>;
  recommend?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updateProductInputs: Array<TCreateProductInput>;
};

export type TUpdateUserInput = {
  intro?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  snsAccount?: InputMaybe<Scalars['String']>;
};

export type TUser = {
  __typename?: 'User';
  boards?: Maybe<Array<TBoard>>;
  email: Scalars['String'];
  followings: Array<TFollowing>;
  id: Scalars['String'];
  intro?: Maybe<Scalars['String']>;
  like?: Maybe<Array<TBoard>>;
  nickName: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  snsAccounts?: Maybe<Array<TSnsAccount>>;
  view?: Maybe<Array<TBoard>>;
};

export type TYoutube = {
  __typename?: 'Youtube';
  thumbnailUrl: Scalars['String'];
  videoUrl: Scalars['String'];
  views: Scalars['Float'];
};
