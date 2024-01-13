import { useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './style';

const LeftSide = () => {
  return (
    <styles.Left>
      <styles.Union />
      <styles.Title />
      <styles.PurpleCloud />
      <styles.MilkyWay />
      <styles.LargeStar />
      <styles.MiniStar />
      <styles.Ellipse />
      <styles.EtcContainer>
        <styles.SignUp to="/signupPage">Sign Up</styles.SignUp>
        <styles.ForgotPwd to="">Forgot the Password?</styles.ForgotPwd>
      </styles.EtcContainer>
    </styles.Left>
  );
};

const SigninPage: React.FC = () => {
  const [email, setEamil] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <styles.Container>
      {/* 곧 삭제될 LeftSide */}
      <LeftSide />
      <styles.PerkyMilkyway />
      <styles.Right>
        
        {/* 이메일 */}
        <styles.InputContainer>
          <styles.InputTitle>EMAIL</styles.InputTitle>
          <styles.Input
            type="email"
            pattern=".+@example\.com"
            placeholder="Enter ID or Email Adress"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setEamil)
            }
          />
        </styles.InputContainer>

        {/* 비밀 번호 */}
        <styles.InputContainer>
          <styles.InputTitle>PASSWORD</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter UserName"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPassword)
            }
          />
        </styles.InputContainer>

        {/* 카카오톡 */}
        <styles.OrSignContainer>
          <styles.OrSignBtn>or sign in with</styles.OrSignBtn>
          <styles.KaKaoIcon />
        </styles.OrSignContainer>

        {/* 로그인 버튼 */}
        <styles.SignInBtn to="">&gt; SIGN IN</styles.SignInBtn>

        {/* 보안정책 */}
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default SigninPage;
