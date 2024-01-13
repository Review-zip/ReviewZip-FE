import { useState } from 'react';
import { faker } from '@faker-js/faker';

import MainMiddelModalComponent from '@/components/mainPageComponent/mainMiddelModalComponent/mainMiddelModalComponent';
import SpaceLoadingModalComponent from '@/components/common/spaceLoadingModalComponent/spaceLoadingModalComponent';
import FrameComponent from '@/components/common/frameComponent/frameComponent';

import { IPost } from '@/types/posts.types';

import styles from './style';
import DownArrowImage from '/images/mainPage/DownArrow.png';

const posts: IPost[] = [
  {
    id: 1,
    title: '개쩌는 제목',
    content:
      '나 김민우, 새로운 세상을 떠나 세상을 모험하는 멋진 모험가가 될것이니라',
    iLike: true,
    date: 1,
    star: 3,
    like: true,
    scrab: false,
    likeNum: 150,
    user: {
      id: 1,
      email: 'test@naver.com',
      nickname: '미누',
      name: '김민우',
      profileImage: faker.image.avatar(),
    },
    hashTags: ['제천 덕수산성', '5월 초봄', '달이 잘 보이는 곳'],
    postImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
    ],
  },
  {
    id: 1,
    title: '개쩌는 제목',
    content:
      '나 김민우, 새로운 세상을 떠나 세상을 모험하는 멋진 모험가가 될것이니라',
    iLike: true,
    date: 1,
    star: 3,
    like: true,
    scrab: false,
    likeNum: 150,
    user: {
      id: 1,
      email: 'test@naver.com',
      nickname: '미누',
      name: '김민우',
      profileImage: faker.image.avatar(),
    },
    hashTags: ['제천 덕수산성', '5월 초봄', '달이 잘 보이는 곳'],
    postImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
    ],
  },
  {
    id: 1,
    title: '개쩌는 제목',
    content:
      '나 김민우, 새로운 세상을 떠나 세상을 모험하는 멋진 모험가가 될것이니라',
    iLike: true,
    date: 1,
    star: 3,
    like: true,
    scrab: false,
    likeNum: 150,
    user: {
      id: 1,
      email: 'test@naver.com',
      nickname: '미누',
      name: '김민우',
      profileImage: faker.image.avatar(),
    },
    hashTags: ['제천 덕수산성', '5월 초봄', '달이 잘 보이는 곳'],
    postImages: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      },
    ],
  },
];

const MainMiddleComponent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [loadingModalOpen, setLoadingModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openLoadingModal = () => {
    setLoadingModalOpen(true);
  };

  return (
    <styles.Container>
      {/* 왼쪽 액자 */}
      <styles.LeftContainer onClick={toggleModal}>
        <FrameComponent post={posts[0]} />
      </styles.LeftContainer>

      {/* 가운데 액자 */}
      <styles.MiddleContainer onClick={toggleModal}>
        <FrameComponent post={posts[1]} />
      </styles.MiddleContainer>

      {/* 오른쪽 액자 */}
      <styles.RightContainer onClick={toggleModal}>
        <FrameComponent post={posts[2]} />
      </styles.RightContainer>

      {/* 아래 화살표 */}
      <styles.ArrowImage src={DownArrowImage} />

      {/* 글씨 */}
      <styles.TextContainer>
        <styles.Text>안녕, 우주에게</styles.Text>
        <styles.Text>나의 가장 아름다운 세상을 보여줄게</styles.Text>
      </styles.TextContainer>

      {/* 액자 눌렀을 때 modal */}
      <MainMiddelModalComponent
        modalOpen={modalOpen}
        toggleModal={toggleModal}
        openLoadingModal={openLoadingModal}
      />

      {/* 로딩 modal */}
      <SpaceLoadingModalComponent loadingModalOpen={loadingModalOpen} />
    </styles.Container>
  );
};

export default MainMiddleComponent;