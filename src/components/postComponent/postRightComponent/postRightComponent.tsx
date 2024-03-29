import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';

import { Post } from '@/types/common.types';

import styles from './style';
import ScrabButtonImage from '/images/post/ScrabButton.png';
import LikeButtonImage from '/images/post/LikeButton.png';
import NotScrabButtonImage from '/images/post/NotScrabButton.png';
import NotLikeButtonImage from '/images/post/NotLikeButton.png';
import SpaceShipImage from '/images/post/SpaceShip.png';
import { useNavigate } from 'react-router-dom';

interface PostRightComponentProps {
  post: Post;
  postLikeNum: number;
  split: boolean;
  openLikeListModal: () => void;
  checkLike: boolean;
  checkScrab: boolean;
  likePost: () => Promise<void>;
  unLikePost: () => Promise<void>;
  scrabPost: () => Promise<void>;
  unScrabPost: () => Promise<void>;
  openAlertModal: () => void;
  canDelete: boolean;
}

const PostRightComponent: React.FC<PostRightComponentProps> = ({
  post,
  postLikeNum,
  split,
  openLikeListModal,
  checkLike,
  checkScrab,
  likePost,
  unLikePost,
  scrabPost,
  unScrabPost,
  openAlertModal,
  canDelete,
}) => {
  const navigation = useNavigate();

  return (
    <styles.Container splitPost={split}>
      {/* 유저 정보 */}
      <styles.TopContainer>
        <styles.TopLeftContainer
          onClick={() => {
            navigation(`/profilePage/${post.user.userId}`);
          }}
        >
          <styles.UserImage src={post.user.profileUrl} />
          <styles.UserName>{post.user.nickname}</styles.UserName>
        </styles.TopLeftContainer>

        <styles.TopRightContainer>
          {canDelete && post.checkMine && (
            <styles.DeleteButton onClick={openAlertModal} />
          )}

          <styles.PostDate>{post.createdAt}</styles.PostDate>
        </styles.TopRightContainer>
      </styles.TopContainer>

      <styles.Line />

      {/* 게시글 내용 */}
      <styles.PostContentContainer>
        <styles.PostContent>{post.comment}</styles.PostContent>
      </styles.PostContentContainer>

      {/* 해시태그들 */}
      <styles.HashTagContainer>
        {post.hashtags.map((hashtag, index) => (
          <styles.HashTag
            key={hashtag.hashtagId}
            onClick={() => {
              navigation(`/hashtagPage/${hashtag.hashtagId}`);
            }}
          >
            <styles.HashTagText># {hashtag.tagName}</styles.HashTagText>
          </styles.HashTag>
        ))}
      </styles.HashTagContainer>

      {/* 좋아요 개수 */}
      <styles.LikeContainer>
        <styles.LikeText onClick={openLikeListModal}>
          {postLikeNum}명이 이 게시글을 좋아합니다
        </styles.LikeText>
        <styles.LikeUserImage src={post.user.profileUrl} />
      </styles.LikeContainer>

      {/* 아래 선 */}
      <styles.Line />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        {/* 좋아요 버튼 */}
        <styles.LikeSrabButtons>
          {checkLike ? (
            <styles.LikeButton src={LikeButtonImage} onClick={unLikePost} />
          ) : (
            <styles.LikeButton src={NotLikeButtonImage} onClick={likePost} />
          )}

          {/* 스크랩 버튼 */}
          {checkScrab ? (
            <styles.ScrabButton src={ScrabButtonImage} onClick={unScrabPost} />
          ) : (
            <styles.ScrabButton src={NotScrabButtonImage} onClick={scrabPost} />
          )}
        </styles.LikeSrabButtons>

        {/* 별점 */}
        <StarRatingComponent count={post.point} all={true} />
      </styles.Buttons>

      {/* 우주선 아이콘 */}
      <styles.SpaceShipImageContainer>
        <styles.SpaceShipImage src={SpaceShipImage} />
      </styles.SpaceShipImageContainer>
    </styles.Container>
  );
};

export default PostRightComponent;
