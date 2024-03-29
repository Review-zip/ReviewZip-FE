import React, { useState } from 'react';
import { changeInputValue } from '@/hooks/chageInputValue';
import styles from './styles';

const MobileComponent: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    // 인증방식이 정해지면 추후 완성
    <styles.Container>
      <styles.Right>
        {/* 성명 */}
        <styles.InputContainer>
          <styles.InputTitle>성명</styles.InputTitle>
          <styles.Input
            type="text"
            pattern=".+@example\.com"
            placeholder="홍길동"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setName)
            }
          />
        </styles.InputContainer>

        {/* 휴대폰 번호  */}
        <styles.InputContainer>
          <styles.InputTitle>휴대폰 번호</styles.InputTitle>
          <styles.Input
            type="password"
            placeholder="Enter UserName"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeInputValue(e, setPhoneNumber)
            }
          />
        </styles.InputContainer>

        {/* 카카오톡 */}
        <styles.CertificationContainer>
          <styles.InputMessage>
            아래의 SMS 인증번호를 입력해주세요.
          </styles.InputMessage>

          <styles.CheckContainer>
            <styles.CheckIcon src="images/signinPage/Check.png" />
            정상적으로 확인되셨습니다.
          </styles.CheckContainer>
        </styles.CertificationContainer>
        {/* 보안정책 */}
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default MobileComponent;
