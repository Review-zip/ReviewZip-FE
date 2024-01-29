import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    font-size: 115%;
    font-weight: bold;
    z-index: 0;
  `,
  PerkyMilkyWay: styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    background-image: url('images/signinPage/PerkyMilkyWay.png');
    background-size: 100% 140%;
    background-repeat: no-repeat;
    background-position: 50px 0px;
    width: 800px;
    height: 650px;
    z-index: 0;
  `,
  PurpleCloud: styled.div`
    position: absolute;
    bottom: 0vh;
    background-image: url('images/signinPage/PurpleCloud.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 1000px;
    height: 85vh;
    z-index: 0;
  `,
  Ellipse: styled.div`
    position: absolute;
    top: 32.5%;
    background-image: url('images/signinPage/Ellipse.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 600px;
    height: 40vh;
    z-index: 2;
  `,

  MilkyWay: styled.div`
    position: absolute;
    bottom: 0;
    background-image: url('images/signinPage/MilkyWay.png');
    background-size: 100% 100%;
    width: 600px;
    height: 50vh;
    z-index: 3;
  `,

  Title: styled.div`
    position: absolute;
    top: 43.5%;
    left: 140px;
    background-image: url('images/signinPage/Title.png');
    background-size: 100% 100%;
    width: 400px;
    height: 12vh;
    z-index: 3;
  `,

  LargeStart: styled.div`
    position: absolute;
    display: flex;
    top: 62.5%;
    left: 100px;
    background-image: url('images/signinPage/LargeStar.png');
    background-size: 100% 100%;
    width: 150px;
    height: 17.5vh;
    z-index: 4;
  `,

  Union: styled.div`
    position: absolute;
    top: 20vh;
    left: 125px;
    background-image: url('images/signinPage/Union.png');
    background-size: 100% 100%;
    width: 100px;
    height: 8vh;
  `,

  MiniStart: styled.div`
    position: absolute;
    top: 30vh;
    left: 525px;
    background-image: url('images/signinPage/MiniStar.png');
    background-size: 100% 100%;
    width: 75px;
    height: 8vh;
    z-index: 3;
  `,
  Right: styled.div`
    postion: relative;
    width: 375px;
    height: 750px;
    margin: 350px 0px 0px 60vw;
    z-index: 5;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px 0px 0px 0px;
  `,

  InputTitle: styled.p`
    width: 100%;
    height: 16px;
    margin: 20px 0px 76px 0px;
    font-weight: bold;
    color: white;
  `,

  Input: styled.input`
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    border-radius: 100px;
    color: white;

    font-size: 90%;
    &::placeholder {
      color: white;
    }
  `,

  OrSignContainer: styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 40px;
    margin: 54px 0px 81px 0px;
  `,

  OrSignBtn: styled.p`
    color: white;
    font-size: 80%;
    cursor: pointer;
  `,

  KaKaoIcon: styled.div`
    background-image: url('images/signinPage/KakaoIcon.png');
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin: 0px 0px 0px 10px;
  `,

  SignInBtn: styled(Link)`
    width: 100%;
    height: 29px;
    margin: 10px 0px 0px 0px;
    color: white;
    font-size: 250%;
    cursor: pointer;
  `,

  Footer: styled.div`
    postion: relative;
    width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    margin: -90px 0px 0px 0px;
    z-index: 4;
  `,
  SignUp: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 16px;
    margin: 0px 0vw 0px 20vw;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,
  ForgotPwd: styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 16px;
    margin: 0px 0px 0px 5vw;
    color: white;
    white-space: nowrap;
    cursor: pointer;
  `,

  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 70px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
