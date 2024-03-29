import { useNavigate } from 'react-router-dom';
import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';
import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';

import { Post } from '@/types/common.types';

import { styles, postLeftStyles } from './style';
import ScrabButtonImage from '/images/post/ScrabButton.png';
import LikeButtonImage from '/images/post/LikeButton.png';
import NotScrabButtonImage from '/images/post/NotScrabButton.png';
import NotLikeButtonImage from '/images/post/NotLikeButton.png';
import SpaceShipImage from '/images/post/SpaceShip.png';
import MapButtonImage from '/images/uploadPost/MapButton.png';

interface PostLeftComponentProps {
  post: Post;
  postLikeNum: number;
  split: boolean;
  splitPost: () => void;
  checkLike: boolean;
  checkScrab: boolean;
  likePost: () => Promise<void>;
  unLikePost: () => Promise<void>;
  scrabPost: () => Promise<void>;
  unScrabPost: () => Promise<void>;
  openMapModal: () => void;
}

const PostLeftComponent: React.FC<PostLeftComponentProps> = ({
  split,
  post,
  postLikeNum,
  splitPost,
  checkLike,
  checkScrab,
  likePost,
  unLikePost,
  scrabPost,
  unScrabPost,
  openMapModal,
}) => {
  const navigation = useNavigate();

  const splitContent = (content: string): string => {
    if (content.length < 15) {
      return content;
    }

    return content.slice(0, 15) + '...';
  };

  return (
    <>
      {split ? (
        <postLeftStyles.Container splitPost={split}>
          {/* 윗부분 뒤로가기, 텍스트 */}
          <postLeftStyles.TopContainer>
            <postLeftStyles.BackButton onClick={splitPost} />
            <postLeftStyles.TopText> 나의 우주에게</postLeftStyles.TopText>
          </postLeftStyles.TopContainer>

          {/* 윗 부분 선 */}
          <postLeftStyles.Line />

          {/* image slider */}
          <ImageSliderComponent sliderImages={post.postImages} />

          {/* 우주선 이미지 */}
          <postLeftStyles.SpaceShipImageContainer>
            <postLeftStyles.SpaceShipImage src={SpaceShipImage} />
          </postLeftStyles.SpaceShipImageContainer>
        </postLeftStyles.Container>
      ) : (
        <styles.Container splitPost={split}>
          <styles.TopText>나의 우주에게</styles.TopText>

          <styles.Line />

          {/* 맨 위 유저 정보, 게시글 날짜 */}
          <styles.UserContainer
            onClick={() => {
              navigation(`/profilePage/${post.user.userId}`);
            }}
          >
            <styles.UserImage src={post.user.profileUrl} />
            <styles.UserName>{post.user.nickname}</styles.UserName>
            <styles.PostDate>{post.createdAt}</styles.PostDate>
          </styles.UserContainer>

          {/* image slider */}
          <ImageSliderComponent sliderImages={post.postImages} />

          {/* 좋아요, 스크랩, 별 버튼 */}
          <styles.Buttons>
            <styles.LikeSrabButtons>
              {checkLike ? (
                <styles.LikeButton src={LikeButtonImage} onClick={unLikePost} />
              ) : (
                <styles.LikeButton
                  src={NotLikeButtonImage}
                  onClick={likePost}
                />
              )}

              {/* 스크랩 버튼 */}
              {checkScrab ? (
                <styles.ScrabButton
                  src={ScrabButtonImage}
                  onClick={unScrabPost}
                />
              ) : (
                <styles.ScrabButton
                  src={NotScrabButtonImage}
                  onClick={scrabPost}
                />
              )}

              <styles.MapButton src={MapButtonImage} onClick={openMapModal} />
            </styles.LikeSrabButtons>

            <StarRatingComponent count={post.point} all={true} />
          </styles.Buttons>

          {/* 좋아요 개수 */}
          <styles.LikeContainer>
            <styles.LikeText>
              {postLikeNum}명이 이 게시글을 좋아합니다
            </styles.LikeText>
            {/* <styles.LikeUserImage src={post.userInfo.nickname} /> */}
          </styles.LikeContainer>

          {/* 게시글 내용 ,더보기 버튼 */}
          <styles.PostContentContainer>
            <styles.PostContent>
              {splitContent(post.comment)}
            </styles.PostContent>
            <styles.MoreContentButton onClick={splitPost}>
              더보기
            </styles.MoreContentButton>
          </styles.PostContentContainer>
        </styles.Container>
      )}
    </>
  );
};

export default PostLeftComponent;
