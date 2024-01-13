import StarRatingComponent from '@/components/common/starRatingComponent/starsRatingComponent';
import ImageSliderComponent from '@/components/common/imageSliderComponent/imageSliderComponent';

import { IPost } from '@/types/posts.types';

import styles from './style';
import ScrabButtonImage from '/images/Post/ScrabButton.png';
import LikeButtonImage from '/images/Post/LikeButton.png';
import NotScrabButtonImage from '/images/Post/NotScrabButton.png';
import NotLikeButtonImage from '/images/Post/NotLikeButton.png';

interface PostAllComponentProps {
  splitPost: () => void;
  post: IPost;
}

const PostAllComponent: React.FC<PostAllComponentProps> = ({
  splitPost,
  post,
}) => {
  const splitContent = (content: string): string => {
    if (content.length < 15) {
      return content;
    }

    return content.slice(0, 15) + '...';
  };

  return (
    <styles.Container>
      <styles.TopText>나의 우주에게</styles.TopText>

      <styles.Line />

      {/* 맨 위 유저 정보, 게시글 날짜 */}
      <styles.UserContainer>
        <styles.UserImage src={post.user.profileImage} />
        <styles.UserName>{post.user.nickname}</styles.UserName>
        <styles.PostDate>{post.date}일 전</styles.PostDate>
      </styles.UserContainer>

      {/* image slider */}
      <ImageSliderComponent sliderImages={post.postImages} />

      {/* 좋아요, 스크랩, 별 버튼 */}
      <styles.Buttons>
        <styles.LikeSrabButtons>
          {post.like ? (
            <styles.LikeButton src={LikeButtonImage} />
          ) : (
            <styles.LikeButton src={NotLikeButtonImage} />
          )}

          {post.scrab ? (
            <styles.ScrabButton src={ScrabButtonImage} />
          ) : (
            <styles.ScrabButton src={NotScrabButtonImage} />
          )}
        </styles.LikeSrabButtons>

        <StarRatingComponent count={post.star} width={30} all={true} />
      </styles.Buttons>

      {/* 좋아요 개수 */}
      <styles.LikeContainer>
        <styles.LikeText>
          {post.likeNum}명이 이 게시글을 좋아합니다
        </styles.LikeText>
        <styles.LikeUserImage src={post.user.profileImage} />
      </styles.LikeContainer>

      {/* 게시글 내용 ,더보기 버튼 */}
      <styles.PostContentContainer>
        <styles.PostContent>{splitContent(post.content)}</styles.PostContent>
        <styles.MoreContentButton onClick={splitPost}>
          더보기
        </styles.MoreContentButton>
      </styles.PostContentContainer>
    </styles.Container>
  );
};

export default PostAllComponent;