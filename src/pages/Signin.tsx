import React from 'react';
import { Redirect } from 'react-router-dom';

import useToken from '../hooks/useToken';
import SigninContainer from '../containers/SigninContainer';

/**
 * 커스텀 훅 사용, 세분화
 * @returns signincontainer
 */
const SigninPage = () => {
  const token = useToken();
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
};

export default SigninPage;
