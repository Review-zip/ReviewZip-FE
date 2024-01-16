import StarRating from '@/components/common/starRatingComponent/starsRatingComponent';

import { IPost } from '@/types/posts.types';

import styles from './style';
import MainMiddleStarImage from '/images/mainPage/MainMiddleStar.png';
import MainMiddeleStickerImage from '/images/mainPage/MainMiddleSticker.png';

interface FrameComponentProps {
  openLoadingModal?: () => void;
  post: IPost;
}

const FrameComponent: React.FC<FrameComponentProps> = ({
  openLoadingModal,
  post,
}) => {
  return (
    <styles.Container onClick={openLoadingModal}>
      <styles.FrameSticker src={MainMiddeleStickerImage} />
      <styles.Frame>
        <styles.ImageContainer>
          <styles.Image src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
          <styles.StarContainer>
            <StarRating count={5} width={20} all={false} />
          </styles.StarContainer>
        </styles.ImageContainer>

        <styles.FrameBottom>
          <styles.StarImage src={MainMiddleStarImage} />
          <styles.LikeText>999+</styles.LikeText>
        </styles.FrameBottom>
      </styles.Frame>
    </styles.Container>
  );
};

export default FrameComponent;
