import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

import LoadingModalComponent from '@/components/common/loadingModalComponent/loadingModalComponent';
import { PostAxiosInstance } from '@/api/axios.methods';
import { KakaoLoginType } from '@/types/response.types';

const KakaoLoginPage: React.FC = () => {
  const [kakaoToken, setKakaoToken] = useState<string>('');

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const code = queryParams.get('code');

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${
            import.meta.env.VITE_KAKAO_REST_API_KEY
          }&redirect_uri=${
            import.meta.env.VITE_KAKAO_REDIRECT_URI
          }&code=${code}`,
          {
            header: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
          },
        );

        setKakaoToken(response.data.access_token);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (kakaoToken) {
        try {
          const response = await PostAxiosInstance<KakaoLoginType>(
            '/v1/auth/kakao/login',
            {
              token: kakaoToken,
            },
          );

          const { accessToken, refreshToken } = response.data.result;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          navigate('/mainPage');
        } catch (error) {
          console.error('why', error);
        }
      }
    })();
  }, [kakaoToken]);

  return (
    <div>
      <LoadingModalComponent message="로그인 중입니다..." />
    </div>
  );
};

export default KakaoLoginPage;
