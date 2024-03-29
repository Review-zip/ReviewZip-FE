import React, { useState, useEffect, useCallback } from 'react';

import PostLeft from '@/components/postComponent/postLeftComponent/postLeftComponent';
import PostRight from '@/components/postComponent/postRightComponent/postRightComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';
import AlertComponent from '../common/alertComponent/alertComponent';

import styles from './style';
import { PlaceInfo, Post, User } from '@/types/common.types';
import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PostAxiosInstance,
} from '@/api/axios.methods';
import { GetPostLikedUsersResponse } from '@/types/response.types';
import MapComponent from '../mapPageComponent/mapComponent/mapComponent';

interface PostComponentProps {
  post: Post;
  posts?: Post[];
  scrabPosts?: Post[];
  setPosts?: React.Dispatch<React.SetStateAction<Post[]>>;
  setScrabPosts?: React.Dispatch<React.SetStateAction<Post[]>>;
  setClickedPost?: React.Dispatch<React.SetStateAction<Post | undefined>>;
  canDelete: boolean;
}

const PostComponent: React.FC<PostComponentProps> = ({
  post,
  posts,
  scrabPosts,
  setPosts,
  setScrabPosts,
  setClickedPost,
  canDelete,
}) => {
  const [postLikedUsers, setPostLikedUsers] = useState<User[]>([]);
  const [split, setSplit] = useState<boolean>(false);
  const [likeListOpen, setLikeListOpen] = useState<boolean>(false);

  const [checkLike, setCheckLiked] = useState<boolean>(post.checkLike!);
  const [checkScrab, setCheckScrab] = useState<boolean>(post.checkScrab!);

  const [postLikeNum, setPostLikeNum] = useState<number>(post.likeNum);

  const [postPlace, setPostPlace] = useState<PlaceInfo>({
    place_name: post.store?.name,
    address_name: post.store?.addressName,
    road_address_name: post.store?.roadAddressName,
    phone: 'any',
    x: post.store?.latitude,
    y: post.store?.longitude,
  });

  useEffect(() => {
    setPostPlace({
      place_name: post.store?.name,
      address_name: post.store?.addressName,
      road_address_name: post.store?.roadAddressName,
      phone: 'any',
      x: post.store?.latitude,
      y: post.store?.longitude,
    });
  }, [post]);

  const [alertModalOpen, setAlertModalOpen] = useState<boolean>(false); // delete modal 띄우기용
  const [mapModalOpen, setMapModalOpen] = useState<boolean>(false); // 맵 모달 띄우기용 변수

  // map 모달 열기
  const openMapModal = useCallback(() => {
    setMapModalOpen(true);
  }, [mapModalOpen]);

  const closeMapModal = useCallback(() => {
    setMapModalOpen(false);
  }, [mapModalOpen]);

  // 좋아요 누른 목록 가져오기 나중에 postId로 변경
  const getLikeUsers = async () => {
    try {
      const response = await GetAxiosInstance<GetPostLikedUsersResponse>(
        `/v1/posts/${post.postId}/users`,
      );

      setPostLikedUsers(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  // 좋아요 누르기
  const likePost = useCallback(async () => {
    try {
      setPostLikeNum(postLikeNum + 1);
      setCheckLiked(true);
      await PostAxiosInstance(`/v1/posts/${post.postId}/like`);
    } catch (error) {
      setPostLikeNum(postLikeNum - 1);
      setCheckLiked(false);
      console.log(error);
    }
  }, [post, postLikeNum]);

  // 좋아요 취소
  const unLikePost = useCallback(async () => {
    try {
      setPostLikeNum(postLikeNum - 1);
      setCheckLiked(false);

      await DeleteAxiosInstance(`/v1/posts/${post.postId}/like`);
    } catch (error) {
      setPostLikeNum(postLikeNum + 1);
      setCheckLiked(true);
      console.log(error);
    }
  }, [post, postLikeNum]);

  // 스크랩하기
  const scrabPost = useCallback(async () => {
    if (scrabPosts && setScrabPosts && posts && setPosts) {
      const updatedPost = { ...post, checkScrab: true };

      const updatedScrabPosts = [updatedPost, ...scrabPosts];

      const updatedPosts = posts.map((post_) => {
        if (post_.postId === post.postId) {
          return {
            ...post_,
            checkScrab: true,
          };
        }

        return post_;
      });

      setPosts(updatedPosts);
      setScrabPosts(updatedScrabPosts);
    }

    try {
      setCheckScrab(true);
      await PostAxiosInstance(`/v1/posts/${post.postId}/scrabs`);
    } catch (error) {
      setCheckScrab(false);
    }
  }, [post, posts, scrabPosts]);

  // 스크랩 취소
  const unScrabPost = useCallback(async () => {
    if (scrabPosts && setScrabPosts && posts && setPosts) {
      const updatedScrabPosts = scrabPosts.filter(
        (scrabPost) => scrabPost.postId !== post.postId,
      );

      const updatedPosts = posts.map((post_) => {
        if (post_.postId === post.postId) {
          return {
            ...post_,
            checkScrab: false,
          };
        }

        return post_;
      });

      setPosts(updatedPosts);
      setScrabPosts(updatedScrabPosts);
    }

    try {
      setCheckScrab(false);

      await DeleteAxiosInstance(`/v1/posts/${post.postId}/scrabs`);
    } catch (error) {
      setCheckScrab(true);
    }
  }, [post, posts, scrabPosts]);

  // 게시글 삭제
  const deletePost = useCallback(async () => {
    if (scrabPosts && setScrabPosts && posts && setPosts) {
      const updatedScrabPosts = scrabPosts.filter(
        (scrabPost) => scrabPost.postId !== post.postId,
      );

      const updatedPosts = posts.filter(
        (post_) => post_.postId !== post.postId,
      );

      setPosts(updatedPosts);
      setScrabPosts(updatedScrabPosts);
    }

    if (setClickedPost) {
      setClickedPost(undefined);
    }

    try {
      setAlertModalOpen(false);
      await DeleteAxiosInstance(`/v1/posts/${post.postId}`);
    } catch (error) {
      console.error(error);
    }
  }, [post, posts, scrabPosts]);

  const splitPost = () => {
    setSplit(!split);
  };

  // alert창 열기
  const openAlertModal = useCallback(() => {
    setAlertModalOpen(true);
  }, []);

  // alert창 닫기
  const closeAlertModal = useCallback(() => {
    setAlertModalOpen(false);
  }, []);

  // 좋아요 목록 열기
  const openLikeListModal = () => {
    setLikeListOpen(true);
  };

  // 좋아요 목록 닫기
  const closeLikeListModal = () => {
    setLikeListOpen(false);
  };

  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      setClickedPost && setClickedPost(undefined);
    }
  };

  useEffect(() => {
    getLikeUsers();
  }, []);

  return (
    <styles.Container onClick={handleOutsideClick}>
      <PostRight
        split={split}
        openLikeListModal={openLikeListModal}
        post={post}
        postLikeNum={postLikeNum}
        checkLike={checkLike}
        checkScrab={checkScrab}
        likePost={likePost}
        unLikePost={unLikePost}
        scrabPost={scrabPost}
        unScrabPost={unScrabPost}
        openAlertModal={openAlertModal}
        canDelete={canDelete}
      />

      <PostLeft
        split={split}
        post={post}
        postLikeNum={postLikeNum}
        splitPost={splitPost}
        checkLike={checkLike}
        checkScrab={checkScrab}
        likePost={likePost}
        unLikePost={unLikePost}
        scrabPost={scrabPost}
        unScrabPost={unScrabPost}
        openMapModal={openMapModal}
      />

      <LikeListComponent
        users={postLikedUsers}
        likeListOpen={likeListOpen}
        closeLikeListModal={closeLikeListModal}
        isReviewer={false}
        isReviewing={false}
      />

      {alertModalOpen && (
        <AlertComponent
          closeAlertModal={closeAlertModal}
          deletePost={deletePost}
        />
      )}

      {mapModalOpen && (
        <MapComponent
          width={80}
          height={80}
          closeMapModal={closeMapModal}
          placeDatas={postPlace}
        />
      )}
    </styles.Container>
  );
};

export default PostComponent;
