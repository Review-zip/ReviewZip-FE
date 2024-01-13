import { useState } from 'react';

import PostComponent from '@/components/postComponent/postComponent';
import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';

import styles from './style';
import mainBottomBackgroundImage from '/images/mainPage/MainBottomBackground.png';
import DownArrowImage from '/images/mainPage/DownArrow.png';

const MainBottomComponent: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // 마우스 아래 휠 이벤트 감지해서 새로운 포스트 불러오기
  const newPost = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      if (!loading) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    } else {
    }
  };

  return (
    <styles.Container
      style={{
        backgroundImage: `url(${mainBottomBackgroundImage})`,
      }}
      onWheel={newPost}
    >
      <PostComponent />
      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} />
      {loading && <LoadingModalComponent />}
    </styles.Container>
  );
};

export default MainBottomComponent;