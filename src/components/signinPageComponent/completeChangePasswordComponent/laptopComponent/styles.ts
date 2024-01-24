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
    display: flex;
    flex-flow: row wrap;
    width: 400px;
    height: 1650px;
    margin: 450px 0px 0px 60vw;
    z-index: 5;
  `,

  SuccessIcon: styled.div`
    background-image: url('images/signinPage/SuccessIcon.png');
    background-size: 100% 100%;
    margin: 0px 0px 0px 0px;
    width: 20%;
    height: 20%;
  `,

  SuccessText: styled(Link)`
    background-image: url('images/signinPage/SuccessText.png');
    background-size: 100% 100%;
    margin: -20px 0px 0px 0px;
    width: 100%;
    height: 7%;
  `,

  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 250px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
  SignUp: styled(Link)`
    position: relative;
    left: 500px;
    bottom: 170px;
    width: fit-content;
    color: white;
    font-size: 125%;
    font-weight: bold;
    z-index: 3;
  `,
};
export default styles;
