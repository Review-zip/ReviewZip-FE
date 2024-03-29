import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { changeInputValue } from '@/hooks/chageInputValue';
import { User } from '@/types/common.types';
import { DeleteAxiosInstance, PostAxiosInstance } from '@/api/axios.methods';

import styles from './style';

interface LikeListComponentProps {
  users: User[];
  setUsers?: React.Dispatch<React.SetStateAction<User[]>>;
  likeListOpen: boolean;
  isReviewer: boolean;
  isReviewing: boolean;
  closeLikeListModal: () => void;
}

const LikeListComponent: React.FC<LikeListComponentProps> = ({
  users,
  setUsers,
  likeListOpen,
  isReviewer,
  isReviewing,
  closeLikeListModal,
}) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const userList = useRef<HTMLDivElement>(null);

  // 팔로우 하기
  const followUser = useCallback(
    async (user: User) => {
      const originUsers = [...users];

      const updatedFollowers = users.map((follower) => {
        if (follower.userId === user.userId) {
          return {
            ...follower,
            following: true,
          };
        }

        return follower;
      });

      if (setUsers) {
        setUsers(updatedFollowers);
      }

      try {
        PostAxiosInstance(`/v1/follows/users/${user.userId}`);
      } catch (error) {
        if (setUsers) {
          setUsers(originUsers);
        }
        console.error(error);
      }
    },
    [users],
  );

  // 팔로잉 취소
  const unFollowUser = useCallback(
    async (user: User) => {
      const originUsers = [...users];

      const updatedFollowers = users.map((follower) => {
        if (follower.userId === user.userId) {
          return {
            ...follower,
            following: false,
          };
        }

        return follower;
      });

      if (setUsers) {
        setUsers(updatedFollowers);
      }

      try {
        await DeleteAxiosInstance(`/v1/follows/users/${user.userId}`);
      } catch (error) {
        if (setUsers) {
          setUsers(originUsers);
        }
        console.error(error);
      }
    },
    [users],
  );

  // 유저 리스트에 focus되도록 하는 함수
  useEffect(() => {
    if (userList.current) {
      userList.current.focus();
    }
  }, []);

  const followButton = useCallback((user: User) => {
    if (isReviewer || isReviewing) {
      return (
        <>
          {user.following ? (
            <styles.FollowButton onClick={() => unFollowUser(user)}>
              <styles.FollowButtonText>삭제</styles.FollowButtonText>
            </styles.FollowButton>
          ) : (
            <styles.FollowButton onClick={() => followUser(user)}>
              <styles.FollowButtonText>리뷰잉</styles.FollowButtonText>
            </styles.FollowButton>
          )}
        </>
      );
    }
  }, []);

  // 검색시에 유저 filter되게 해주는 함수
  const filterUsers = useCallback(
    (users: User[]) => {
      const filterUserlist = users.filter((user: User) =>
        user.nickname.includes(searchInput),
      );

      return (
        <>
          {filterUserlist.map((user: User) => (
            <styles.UserList key={user.userId}>
              <Link
                to={`/profilePage/${user.userId}`}
                onClick={closeLikeListModal}
              >
                <styles.UserData>
                  <styles.UserImage src={user.profileUrl} />
                  <styles.UserName>{user.nickname}</styles.UserName>
                  {user.following && (
                    <styles.Reviewing>•리뷰잉</styles.Reviewing>
                  )}
                </styles.UserData>
              </Link>

              {followButton(user)}
            </styles.UserList>
          ))}
        </>
      );
    },
    [searchInput, users],
  );

  return (
    <styles.Container
      onScroll={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
      style={{
        opacity: likeListOpen ? 1 : 0,
        pointerEvents: likeListOpen ? 'auto' : 'none',
      }}
    >
      <styles.InnerContainer>
        {/*리뷰잉 리뷰어 글씨, 나가기 버튼 */}
        <styles.TopContainer>
          <styles.Title>
            {isReviewer ? '리뷰어' : isReviewing ? '리뷰잉' : '공감한 인원'}
          </styles.Title>
          <styles.ExitButton onClick={closeLikeListModal}>
            나가기 버튼
          </styles.ExitButton>
        </styles.TopContainer>

        <styles.Line />

        {/* 검색창 */}
        <styles.SearchContainer>
          <styles.SearchIcon />
          <styles.SearchInput
            placeholder="검색"
            onChange={(e) => changeInputValue(e, setSearchInput)}
          />
        </styles.SearchContainer>

        {/* 유저 검색 리스트 */}
        <styles.UserListContainer
          ref={userList}
          onScroll={(e) => e.preventDefault()}
          onWheel={(e) => e.preventDefault()}
        >
          {filterUsers(users)}
        </styles.UserListContainer>
      </styles.InnerContainer>
    </styles.Container>
  );
};

export default LikeListComponent;
