import styles from './style';
import NotFound from '/images/notFoundPage/404_.png';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <styles.Container>
        {/* 404아이콘 이미지가 뜨는 왼쪽 부분 */}
        <styles.Left>
          <img src={NotFound} />
        </styles.Left>
        {/* 페이지 설명과 메인 페이지로 가는 링크가 뜨는 오른쪽 부분 */}
        <styles.Right>
          <div>
            <styles.Text as="h2">
              원하시는 페이지를 찾을 수 없습니다.{' '}
            </styles.Text>
            <styles.Text>
              찾으려는 페이지의 주소가 잘못 입력되었거나
              <br /> 주소의 변경혹은 삭제로 이용하실 수 없습니다. <br />
              입력하신 페이지의 주소를 다시 한번 확인해주세요.
            </styles.Text>
            <styles.LinkContainer>
              <styles.Link to="/">메인 페이지로 </styles.Link>
            </styles.LinkContainer>
          </div>
        </styles.Right>
      </styles.Container>
    </>
  );
};

export default NotFoundPage;
