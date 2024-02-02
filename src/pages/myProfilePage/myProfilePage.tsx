import { useState, useCallback, useEffect } from 'react';

import { GetAxiosInstance } from '@/api/axios.methods';
import { CurtPost } from '@/types/common.types';
import {
  GetUserPostsResponse,
  GetUserInfoResponse,
} from '@/types/response.types';
import ReviewPictureComponent from '@/components/myProfilePageComponent/reviewPicturesComponent/reviewPictureComponent';
import ProfileNameImageComponent from '@/components/myProfilePageComponent/profileNameImageComponent/profileNameImageComponent';
import UserProfileStatsComponent from '@/components/myProfilePageComponent/userProfileStatsComponent/userProfileStatsComponent';
import ButtonComponent from '@/components/myProfilePageComponent/buttonComponent/buttonComponent';
import LikeListComponent from '@/components/common/likeListComponent/likeListComponent';
import PostComponent from '@/components/postComponent/postComponent';

import styles from './style';
import MainLogo from '/images/myProfilePage/MainLogoImage.png';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

//게시물 정보를 담은 배열의 게시물 타입
export type PictureType = {
  postId: number;
  postImageUrl: string;
  likeNum: number;
  scrabNum: number;
};

//프로필 페이지 Props 타입
interface ProfilePageProps {
  isFriend?: boolean;
  friendImage?: string;
  pictures?: PictureType[];
  friendId: number;
  setFriendId: React.Dispatch<React.SetStateAction<number>>;
}

const MyProfilePage: React.FC<ProfilePageProps> = ({
  isFriend,
  friendImage,
  pictures,
  friendId,
  setFriendId,
}) => {
  //게시물 버튼을 클릭한 경우, 저장소 버튼을 클릭한 경우에 대한 state
  const [postItemIsClicked, setPostClicked] = useState<boolean>(true);
  const [storageIsClicked, setStorageClicked] = useState<boolean>(false);
  //화면에 표시된 순서대로 게시물, 리뷰어 , 리뷰잉이 클릭이 된건지에 대한 값이 배열에 들어감
  const [isClicked, setIsClicked] = useState<boolean[]>([false, false, false]);
  //프로필 수정
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  //게시물이 클릭
  const [postIsClicked, setPostIsClicked] = useState<boolean>(false);
  //모달 오픈
  const [openModal, setOpenModal] = useState<boolean>(false);
  //리뷰잉이나 리뷰어 눌렀을 때 쓸 컴폰넌트 오픈
  const [friendListOpen, setFriendListOpen] = useState<boolean>(false);

  // 스크랩한 게시물인 경우 /scrab이 붙음
  const [isScrab, setIsScrab] = useState<string>('');
  //간단한 게시물 정보
  const [curtPosts, setCurtPosts] = useState<CurtPost[]>([]);
  //userId 본인 프로필 페이지인 경우 me 다른 유저들은 숫자 일단은 3을 기본으로
  const [userId, setUserId] = useState<string | number>(3);
  //프로필 상단에 들어갈 유저 정보
  const [userInfo, setUserInfo] = useState<GetUserInfoResponse>();
  // 포스트들 가져오기
  const getCurtPosts = async () => {
    try {
      const response = await GetAxiosInstance<GetUserPostsResponse>(
        `/v1/users/${userId}/posts${isScrab}?page=0&size=8`,
      );

      setCurtPosts(response.data.result.postList);
      console.log('Posts:', response.data.result);
      console.log(`/v1/users/${userId}/posts${isScrab}?page=0&size=8`);
    } catch (error) {
      console.log(error);
    }
  };

  // 유저들의 정보(닉네임, 프로필 이미지 등) 가져오기
  const getUserInfo = async () => {
    try {
      const response = await GetAxiosInstance<GetUserInfoResponse>(
        `/v1/users/${userId}`,
      );

      setUserInfo(response.data.result);
      console.log('UserInfo:', response.data.result);
      console.log(`/v1/users/${userId}/`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isFriend && setUserId(friendId);
    console.log(friendId); //프로필 페이지에서 친구 prop을 받은 경우
    getCurtPosts();
    getUserInfo();
  }, [isScrab]);

  const modalOpen = useCallback(() => {
    setOpenModal(true);
  }, [openModal]);

  const modalClose = useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

  // '친구 목록' 모달을 닫는 함수
  const closeFriendListModal = () => {
    setFriendListOpen(false);
    modalClose();
  };

  return (
    <styles.Container>
      {/*리뷰어가 클릭이 됐을 때와 리뷰잉이 클릭이 됐을 때 다른 창이 뜨게끔 */}
      {isClicked[1] && (
        <LikeListComponent
          closeLikeListModal={closeFriendListModal}
          likeListOpen={friendListOpen}
          isReviewer={isClicked[1]}
          isReviewing={isClicked[2]}
          setFriendId={setFriendId}
        />
      )}
      {isClicked[2] && (
        <LikeListComponent
          closeLikeListModal={closeFriendListModal}
          likeListOpen={friendListOpen}
          isReviewer={isClicked[1]}
          isReviewing={isClicked[2]}
          setFriendId={setFriendId}
        />
      )}
      {/* 게시물이 클릭이 된 경우  */}
      {postIsClicked && (
        <styles.Overlay>
          <PostComponent
            modalOpen={modalOpen}
            modalClose={modalClose}
            setPostIsClicked={setPostIsClicked}
          />
        </styles.Overlay>
      )}
      {/*메인 로고 - 뷰포트 크기에 의해 일정 크기 이하에서는 옆으로 넘어감  */}
      <styles.MainLogoContainer>
        <styles.MainLogoImage src={MainLogo} />
      </styles.MainLogoContainer>
      <styles.ProfilePictureContainer>
        {/*보라색 세로 그룹 바  */}
        <GroupBarComponent color="purple" direction="col" />
        <styles.ProfileContainer>
          {/*좌측의 이름과 프로필 사진이 뜨는 컴포넌트 */}
          {userInfo && (
            <ProfileNameImageComponent
              isEditProfile={isEditProfile}
              friendProfileImage={friendImage}
              isFriend={isFriend}
              userInfo={userInfo}
            />
          )}
          {/*게시물,리뷰어,리뷰잉 수와 프로필 수정 버튼이 들어있는 컴포넌트 */}
          {userInfo && (
            <UserProfileStatsComponent
              setIsClicked={setIsClicked}
              setIsEditProfile={setIsEditProfile}
              isEditProfile={isEditProfile}
              isFriend={isFriend}
              setFriendListOpen={setFriendListOpen}
              userInfo={userInfo}
            />
          )}
        </styles.ProfileContainer>
        {/*게시물 ,저장소 버튼 컴포넌트  */}
        <ButtonComponent
          postItemIsClicked={postItemIsClicked}
          setPostClicked={setPostClicked}
          storageIsClicked={storageIsClicked}
          setStorageClicked={setStorageClicked}
          setIsScrab={setIsScrab}
        />
        {/* 리뷰 게시물 이미지 컴포넌트 */}
        {curtPosts.length > 0 && (
          <ReviewPictureComponent
            storageIsClicked={storageIsClicked}
            setPostISClicked={setPostIsClicked}
            picture={pictures}
            curtPost={curtPosts}
          />
        )}
      </styles.ProfilePictureContainer>
    </styles.Container>
  );
};

const defaultUserInfo: GetUserInfoResponse = {
  userId: 1,
  name: 'string',
  nickname: 'string',
  profileUrl: 'string',
  followingNum: 0,
  followerNum: 0,
  following: true,
};
export default MyProfilePage;
