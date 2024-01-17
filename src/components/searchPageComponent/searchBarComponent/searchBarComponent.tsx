import { changeInputValue } from '@hooks/chageInputValue';

import { responsiveWidthHeight } from '@/utils/reponsiveSize';
import { checkDevice } from '@/utils/checkDeviceSize';

import styles from './style';
import SearchImage from '/images/searchPage/SearchImage.png';

//한줄 치고 ctrl+s
//media-query쓸거니까 max-width랑 max-height 다 지우기
export interface SearchBarComponentProps {
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchBarComponent: React.FC<SearchBarComponentProps> = ({
  searchInputValue,
  setSearchInputValue,
  isClicked,
  setIsClicked,
}) => {
  const device = checkDevice();

  //돋보기랑 인풋 형제 요소로 주기 border나 이런 스타일은 div에
  return (
    // 돋보기와 input을 감싼 div 컴포넌트
    <styles.SearchBarContainer
      style={responsiveWidthHeight(
        device,
        { width: 2000, height: 160 },
        { width: 1700, height: 140 },
        { width: 1400, height: 100 },
        { width: 1080, height: 80 },
        { width: 500, height: 50 },
        { width: 200, height: 20 },
      )}
      isClicked={isClicked}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <styles.Search src={SearchImage} />
      {/*돋보기 div */}
      <styles.SearchBar
        type="text"
        size={90}
        value={searchInputValue}
        placeholder="search"
        onChange={(e) => changeInputValue(e, setSearchInputValue)}
      />
      {/*input */}
    </styles.SearchBarContainer>
  );
};

export default SearchBarComponent;
