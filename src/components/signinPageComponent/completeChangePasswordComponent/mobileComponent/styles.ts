import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-image: url('images/signinPage/Background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-size: 100%;
    font-weight: bold;
    z-index: 0;
  `,
  Right: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 400px;
    height: 500px;
    z-index: 3;
  `,
  SuccessIcon: styled.div`
    background-image: url('images/signinPage/SuccessIcon.png');
    background-size: 100% 100%;
    margin: 0px 0px 0px 0px;
    width: 64px;
    height: 64px;
  `,

  SuccessText: styled(Link)`
    background-image: url('images/signinPage/SuccessText.png');
    background-size: 100% 100%;
    margin: -70px 0px 0px 0px;
    width: 350px;
    height: 25px;
  `,
  SignUp: styled(Link)`
    position: relative;
    width: 69px;
    height: 16px;
    color: white;
    white-space: nowrap;
    font-weight: bold;
    margin: 0px 0px 0px 0px;
    z-index: 3;
  `,
  PrivacyPolicy: styled.p`
    width: fit-content;
    margin: 0px 0px 0px 0px;
    color: #323a54;
    font-size: 125%;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  `,
};
export default styles;
