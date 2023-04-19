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

export type Board = {
  __typename?: 'Board';
  comments?: Maybe<Comment>;
  description: Scalars['String'];
  hashtags?: Maybe<Array<Hashtag>>;
  id: Scalars['String'];
  likers?: Maybe<Array<User>>;
  products: Array<Product>;
  recommend?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  viewers?: Maybe<Array<User>>;
  writer: User;
};

export type Comment = {
  __typename?: 'Comment';
  board: Board;
  content: Scalars['String'];
  id: Scalars['String'];
  user: Scalars['String'];
};

export type CreateBoardInput = {
  createProductInputs: Array<CreateProductInput>;
  description: Scalars['String'];
  hashtags: Array<Scalars['String']>;
  recommend?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateProductInput = {
  name: Scalars['String'];
  url: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Following = {
  __typename?: 'Following';
  followingid: Scalars['String'];
  id: Scalars['String'];
  users: Array<User>;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  boards: Array<Board>;
  hashtag: Scalars['String'];
  id: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MatchAuthInput = {
  authNumber: Scalars['String'];
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authEmail: Scalars['Boolean'];
  createBoard: Board;
  createUser: User;
  deleteUser: Scalars['Boolean'];
  logOut: Scalars['String'];
  login: Scalars['String'];
  matchAuthNumber: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateBoard: Board;
  updateFollowing: Scalars['Boolean'];
  updateUser: User;
};


export type MutationAuthEmailArgs = {
  email: Scalars['String'];
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationMatchAuthNumberArgs = {
  matchAuthInput: MatchAuthInput;
};


export type MutationResetUserPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationUpdateBoardArgs = {
  boardId: Scalars['String'];
  updateBoardInput: UpdateBoardInput;
};


export type MutationUpdateFollowingArgs = {
  followingid: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Product = {
  __typename?: 'Product';
  board: Board;
  id: Scalars['String'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  fetchBoard: Scalars['String'];
  fetchFollowings: Array<User>;
  fetchYoutube: Array<Youtube>;
};


export type QueryFetchFollowingsArgs = {
  userid: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SnsAccount = {
  __typename?: 'SnsAccount';
  id: Scalars['String'];
  sns: Scalars['String'];
  user: User;
};

export type UpdateBoardInput = {
  description: Scalars['String'];
  hashtags: Array<Scalars['String']>;
  recommend?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updateProductInputs: Array<CreateProductInput>;
};

export type UpdateUserInput = {
  intro?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  snsAccount?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  boards?: Maybe<Array<Board>>;
  email: Scalars['String'];
  followings: Array<Following>;
  id: Scalars['String'];
  intro?: Maybe<Scalars['String']>;
  like?: Maybe<Array<Board>>;
  nickName: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  snsAccounts?: Maybe<Array<SnsAccount>>;
  view?: Maybe<Array<Board>>;
};

export type Youtube = {
  __typename?: 'Youtube';
  thumbnailUrl: Scalars['String'];
  videoUrl: Scalars['String'];
  views: Scalars['Float'];
};
