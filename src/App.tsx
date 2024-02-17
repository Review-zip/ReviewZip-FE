import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import SigninPage from '@/pages/signinPage/signinPage';
import SignupPage from '@/pages/signupPage/signupPage';
import PasswordRecoveryPage from '@/pages/PasswordRecoveryPage/PasswordRecoveryPage';
import ChangePasswordPage from '@/pages/changePasswordPage/changePasswordPage';
import MainPage from '@/pages/mainPage/mainPage';
import SearchPage from '@/pages/searchPage/searchPage';
import MyProfilePage from '@/pages/myProfilePage/myProfilePage';
import UploadPage from '@/pages/uploadPage/uploadPage';
import HashtagPage from '@pages/hashtagPage/hashtagPage';
import CompleteSigninPage from './pages/completeSigninPage/CompleteSigninPage';
import CompleteChangePasswordPage from './pages/completeChangePasswordPage/CompleteChangePasswordPage';
import KakaoLoginPage from '@/pages/kakaoLoginPage/kakaoLoginPage';
import NotFoundPage from '@/pages/notFoundPage/notFoundPage';
import MapPage from './pages/mapPage/mapPage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* 로그인하지 않은 유저만 입장 가능한 페이지 */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<SigninPage />}></Route>
          <Route path="/signinPage" element={<SigninPage />}></Route>
          <Route path="/signupPage" element={<SignupPage />}></Route>
          <Route path="/kakaoLogin" element={<KakaoLoginPage />}></Route>
          <Route
            path="/passwordRecoveryPage"
            element={<PasswordRecoveryPage />}
          ></Route>
          <Route
            path="/changePasswordPage"
            element={<ChangePasswordPage />}
          ></Route>
        </Route>

        {/* 로그인 한 유저만 입장 가능한 페이지 */}
        <Route element={<PrivateRoute />}>
          <Route path="/mainPage" element={<MainPage />}></Route>
          <Route path="/searchPage" element={<SearchPage />}></Route>
          <Route path="/uploadPage" element={<UploadPage />}></Route>
          <Route
            path="/profilePage/:userId"
            element={<MyProfilePage />}
          ></Route>
          <Route
            path="/hashtagPage/:hashtagId"
            element={<HashtagPage />}
          ></Route>
          <Route path="/mapPage" element={<MapPage />}></Route>
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Route>,
    ),
    { basename: '/review-zip' },
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
