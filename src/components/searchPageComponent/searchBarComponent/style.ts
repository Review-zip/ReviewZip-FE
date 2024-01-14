import styled from 'styled-components';

const styles = {
  //검색창과 돋보기 div를 감쌀 컨테이너
  SearchBarContainer: styled.div`
    position: absolute;
    top: 5vh;
    left: 50%; // 왼쪽에서 50% 위치에 배치
    transform: translateX(-50%); // X축으로 -50% 만큼 이동하여 중앙 정렬
    background-color: rgba(255, 255, 255, 0.6);
    width: 70vw;
    height: 10vh;
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 30.5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

    &:focus-within {
      background-color: rgba(255, 255, 255, 0.4);
      box-shadow: none;
      border-radius: 30.5px 30.5px 0 0;
    }
  `,
  // 검색창 안에 위치한 돋보기
  Search: styled.div`
    background-image: url('images/searchPage/SearchImage.png');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    width: 26.96px;
    height: 26.96px;
  `,
  // 검색 input
  SearchBar: styled.input`
    background-color: transparent;
    background-size: cover;
    width: 30vw;
    height: 5vh;
    margin: 10px;
    border: none;
    font-size: 20px;
    color: black;
    outline: none;
    &::placeholder {
      color: black;
    }
  `,
};

export default styles;
