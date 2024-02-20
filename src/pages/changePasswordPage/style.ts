import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/signinPage/Signin.png');
  background-repeat: no-repeat;
  background-size: cover;
`;


const EtcContainer = styled.div`
  height: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUp = styled(Link)`
  position: relative;
  width: 4vw;
  height: 2.5vh;
  color: white;
  z-index: 3;
  margin: 44vh 0vw 0vh 20vw;

  cursor: pointer;
`;

const ForgotPwd = styled(Link)`
  position: relative;
  width: 10vw;
  height: 2.5vh;
  color: white;
  margin: -2.6vh 0vw 0vh 30vw;

  z-index: 3;
  cursor: pointer;
`;

// *******Right******* //뷰포트 내에서 상단에 위치한 순으로 배치했음

const Right = styled.div`
  flex: 1;
  padding: 3vh 0vw 0vh 7.5vw;
  border: 1px solid white;
`;

const PerkyMilkyway = styled.div`
  position: absolute;
  top: 2vh;
  right: 0vw;
  width: 35vw;
  height: 50vh;
  background-image: url('images/perkeyMilkyway.png');
  background-repeat: no-repeat;
`;

const InputContainer = styled.div`
  width: 25vw;
  position: relative; // input이 화면 전체 사용하기 위함
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1vh 2.5vw;
`;

const InputTitle = styled.div`
  font-weight: bold;
  margin: 45px 0px;
  color: white;
`;

const Input = styled.input`
  width: 25vw; // input이 화면 전체 사용하기 위함
  box-sizing: border-box; // input이 화면 전체 사용하기 위함
  margin: 5px 0;
  padding: 10px;
  color: white;
  font-weight: bold;
  background-color: gray;
  opacity: 0.5;
  border-radius: 100px;
  border: 1px solid white;
  &::placeholder {
    color: white;
  }
`;

// ********or Sign in with Css********

const KaKaoIcon = styled.div`
  background-image: url('images/ri_kakao-talk-fill.png');
  background-repeat: no-repeat;
  width: 2vw;
  height: 4vh;
  margin: 0vh 0vw 0vh 0.5vw;
`;
//*************************************
const ChangeBtn = styled(Link)`
  font-size: 300%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 7vh 2.5vw;
  color: white;
  width: fit-content; // 버튼이 자신의 크기만큼만 차지하게 하기 위함
  cursor: pointer;
`;

const PrivacyPolicy = styled.h2`
  display: flex;
  align-items: center;
  color: #323a54;
  width: fit-content;
  margin: 9vh 2.5vw;

  cursor: pointer;
`;

export default {
  Container,
  Right,
  InputContainer,
  InputTitle,
  Input,
  ChangeBtn,
  PrivacyPolicy,
  KaKaoIcon,
  PerkyMilkyway,
  SignUp,
  ForgotPwd,
  EtcContainer,
};