import { User, Post, PostImages, CurtPost } from './common.types';

interface KakaoLoginType {
  accessToken: string;
}

interface CreatePostResponse {
  postId: number;
  userId: number;
  comment: string;
  point: number;
  imageIds: number[];
}

// /v1/images/users/{userId}
interface CreateImagesResponse {
  imageIds: number[];
}

// /v1/posts/random
interface GetRandomPostsResponse extends Array<Post> {}

// /v1/users/{userId}/posts
interface GetUserPostsResponse {
  postList: CurtPost[];
  listSize: number;
  totalPage: number;
  totalElements: number;
  isFirst: boolean;
  isLast: boolean;
}

///v1/users/{userId}
interface GetUserInfoResponse {
  userId: number;
  name: string;
  nickname: string;
  profileUrl: string;
  followingNum: number;
  followerNum: number;
  following: boolean;
}
export type {
  KakaoLoginType,
  CreatePostResponse,
  CreateImagesResponse,
  GetRandomPostsResponse,
  GetUserPostsResponse,
  GetUserInfoResponse,
};
