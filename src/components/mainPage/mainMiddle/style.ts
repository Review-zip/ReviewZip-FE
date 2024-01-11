import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
`;

const styles = {
  Container: styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background: linear-gradient(to bottom, #251a34 50%, #331b50 50%);
    position: relative;
  `,

  LeftContainer: styled.div`
    margin: -25vh auto;
  `,

  MiddleContainer: styled.div`
    margin: -10vh auto;
  `,

  RightContainer: styled.div`
    margin: -20vh auto;
  `,

  TextContainer: styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 3vh 3vw;
  `,

  Text: styled.p`
    color: white;
    font-size: x-large;
    font-weight: bold;
  `,

  ArrowImage: styled.img`
    position: absolute;
    width: 77px;
    height: 77px;
    bottom: 0;
    left: 48%;
    transform: translate(-50%, -50%);

    margin-bottom: 3vh;
    animation: ${bounceAnimation} 1s infinite;
  `,
};

export default styles;
