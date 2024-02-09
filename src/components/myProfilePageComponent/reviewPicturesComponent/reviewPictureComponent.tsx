import styles from './style';
import StarImage from '/images/myProfilePage/StarImage.png';
import Storage from '/images/myProfilePage/StorageImage.png';
import Union from '/images/myProfilePage/Union.png';
import { Post } from '@/types/common.types';

interface ChangePageProps {
  setPostIsClicked: React.Dispatch<React.SetStateAction<number | undefined>>;
  posts: Post[];
}

const ReviewPictureComponent: React.FC<ChangePageProps> = ({
  setPostIsClicked,
  posts,
}) => {
  return (
    <styles.RveiwPicturesContainer>
      {/*props를 받아서 저장소 버튼이 클릭이 되어있으면 저장소 데이터 배열을 map에 전달하고 게시물을 클릭하면 해당 데이터를 전달 */}
      {posts.map((post, index) => (
        <styles.PictureContainer
          key={index}
          onClick={() => {
            setPostIsClicked(post.postId); //클릭한 post의 postId를 넣어줌
          }}
        >
          <styles.PictureBorder>
            <styles.Picture
              src={post.postImages[0].imageUrl} //postImages 배열이 undefined로 에러가 남
              alt={'Picture' + String(post.postId)}
            />
          </styles.PictureBorder>
          {/* 게시물의 좋아요가 100개 이상인 경우 Union 아이콘 표시 */}
          {post.likeNum > 100 ? (
            <styles.IconUnion src={Union} alt="Union" />
          ) : (
            <styles.IconUnion style={{ visibility: 'hidden' }} />
          )}
          {/* 게시물에 마우스 hover시에만 보일 아이콘들 */}
          <styles.IconContainer>
            <styles.IconBox>
              <styles.Icon src={StarImage} />
              <styles.Count>{post.likeNum}</styles.Count>
            </styles.IconBox>
            <styles.IconBox>
              <styles.Icon src={Storage} />
              <styles.Count>{3 /*post.scrabNum*/}</styles.Count>{' '}
              {/*스크랩 수가 없음 */}
            </styles.IconBox>
          </styles.IconContainer>
        </styles.PictureContainer>
      ))}
    </styles.RveiwPicturesContainer>
  );
};

export default ReviewPictureComponent;
