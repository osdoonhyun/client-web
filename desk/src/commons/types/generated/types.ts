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
  DateTime: any;
  Upload: any;
};

export type TAuthEmailInput = {
  authCheck: Scalars['Boolean'];
  email: Scalars['String'];
};

export type TBoard = {
  __typename?: 'Board';
  comments?: Maybe<Array<TComments>>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  hashtags?: Maybe<Array<THashtag>>;
  id: Scalars['String'];
  like: Scalars['Boolean'];
  likers?: Maybe<Array<TUser>>;
  likes: Scalars['Int'];
  pictures: Array<TPicture>;
  products: Array<TProduct>;
  recommend?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  views: Scalars['Int'];
  writer: TUser;
};

export type TComments = {
  __typename?: 'Comments';
  board: TBoard;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  replies?: Maybe<Array<TReply>>;
  user: TUser;
};

export type TCreateBoardInput = {
  createProductInputs: Array<TCreateProductInput>;
  description: Scalars['String'];
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  recommend?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  uploadFile: Array<Scalars['String']>;
};

export type TCreateCommentInput = {
  boardid: Scalars['String'];
  content: Scalars['String'];
};

export type TCreateProductInput = {
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type TCreateReplyInput = {
  commentid: Scalars['String'];
  content: Scalars['String'];
};

export type TCreateUserInput = {
  email: Scalars['String'];
  jobGroup: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type TFetchUser = {
  __typename?: 'FetchUser';
  boardCount: Scalars['Int'];
  user: TUser;
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
  createComment: TComments;
  createReply: TReply;
  createUser: TUser;
  deleteBoard: Scalars['Boolean'];
  deleteComment: Scalars['Boolean'];
  deleteReply: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  logOut: Scalars['String'];
  login: Scalars['String'];
  matchAuthNumber: Scalars['Boolean'];
  resetUserPassword: Scalars['Boolean'];
  restoreAccessToken: Scalars['String'];
  updateBoard: TBoard;
  updateBoardLiker: Scalars['Boolean'];
  updateFollowing: Scalars['Boolean'];
  updateUser: TUser;
  uploadFile: Array<Scalars['String']>;
};


export type TMutationAuthEmailArgs = {
  authEmailInput: TAuthEmailInput;
};


export type TMutationCreateBoardArgs = {
  createBoardInput: TCreateBoardInput;
};


export type TMutationCreateCommentArgs = {
  createCommentInput: TCreateCommentInput;
};


export type TMutationCreateReplyArgs = {
  createReplyInput: TCreateReplyInput;
};


export type TMutationCreateUserArgs = {
  createUserInput: TCreateUserInput;
};


export type TMutationDeleteBoardArgs = {
  boardid: Scalars['String'];
};


export type TMutationDeleteCommentArgs = {
  commentid: Scalars['String'];
};


export type TMutationDeleteReplyArgs = {
  replyid: Scalars['String'];
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
  boardid: Scalars['String'];
  updateBoardInput: TUpdateBoardInput;
};


export type TMutationUpdateBoardLikerArgs = {
  boardid: Scalars['String'];
};


export type TMutationUpdateFollowingArgs = {
  followingid: Scalars['String'];
};


export type TMutationUpdateUserArgs = {
  updateUserInput: TUpdateUserInput;
};


export type TMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export type TOpenGraph = {
  __typename?: 'OpenGraph';
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type TPicture = {
  __typename?: 'Picture';
  board: TBoard;
  id: Scalars['String'];
  isMain: Scalars['Boolean'];
  url: Scalars['String'];
};

export type TProduct = {
  __typename?: 'Product';
  board: TBoard;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type TQuery = {
  __typename?: 'Query';
  fetchAllProducts: Array<TProduct>;
  fetchBoard: TBoard;
  fetchBoards: Array<TBoard>;
  fetchBoardsUserLiked: Array<TBoard>;
  fetchFollowees: Array<TUser>;
  fetchFollowingBoards: Array<TUser>;
  fetchFollowings: Array<TUser>;
  fetchLoginUser: TUser;
  fetchTop10: Array<TBoard>;
  fetchUser: TFetchUser;
  fetchUserBoards: Array<TBoard>;
  fetchUserProducts: Array<TProduct>;
  fetchYoutube: Array<TYoutube>;
  getOpenGraph: TOpenGraph;
  searchBoards: Array<TBoard>;
};


export type TQueryFetchBoardArgs = {
  boardid: Scalars['String'];
  userid: Scalars['String'];
};


export type TQueryFetchBoardsArgs = {
  userid: Scalars['String'];
};


export type TQueryFetchFolloweesArgs = {
  userid: Scalars['String'];
};


export type TQueryFetchFollowingsArgs = {
  userid: Scalars['String'];
};


export type TQueryFetchTop10Args = {
  userid: Scalars['String'];
};


export type TQueryFetchUserArgs = {
  userid: Scalars['String'];
};


export type TQueryFetchUserBoardsArgs = {
  userid: Scalars['String'];
};


export type TQueryFetchUserProductsArgs = {
  userid: Scalars['String'];
};


export type TQueryGetOpenGraphArgs = {
  url: Scalars['String'];
};


export type TQuerySearchBoardsArgs = {
  keyword: Scalars['String'];
};

export type TReply = {
  __typename?: 'Reply';
  comment: TComments;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  user: TUser;
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
  hashtags?: InputMaybe<Array<Scalars['String']>>;
  recommend?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updateProductInputs: Array<TUpdateProductInput>;
  uploadFile: Array<Scalars['String']>;
};

export type TUpdateProductInput = {
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type TUpdateUserInput = {
  intro?: InputMaybe<Scalars['String']>;
  jobGroup?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  snsAccount?: InputMaybe<Array<Scalars['String']>>;
};

export type TUser = {
  __typename?: 'User';
  boards?: Maybe<Array<TBoard>>;
  email: Scalars['String'];
  followeeStatus: Scalars['Boolean'];
  followeesCount: Scalars['Int'];
  followingStatus: Scalars['Boolean'];
  followingsCount: Scalars['Int'];
  id: Scalars['String'];
  intro?: Maybe<Scalars['String']>;
  jobGroup: Scalars['String'];
  like?: Maybe<Array<TBoard>>;
  nickName: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  snsAccounts?: Maybe<Array<TSnsAccount>>;
};

export type TYoutube = {
  __typename?: 'Youtube';
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  videoUrl: Scalars['String'];
  views: Scalars['Float'];
};
