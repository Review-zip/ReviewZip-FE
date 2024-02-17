import { Link } from 'react-router-dom';
import styled from 'styled-components';

const styles = {
  Container: styled.div`
    background-image: url('');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    width: 100vw;
    height: 100vh;
    over-flow: hidden;
  `,
  Left: styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  Right: styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  Text: styled.p`
    color: white;
  `,
  Link: styled(Link)`
    color: white;
    font-size: 17px;
    font-weight: bolder;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LinkContainer: styled.div`
    background: #7843b6;
    border-radius: 50px;

    width: 250px;
    height: 30px;

    margin-top: 100px;
  `,
};

export default styles;
