import React from 'react';
import { Redirect } from 'react-router-dom';

import useToken from '../hooks/useToken';
import SigninContainer from '../containers/SigninContainer';

/**
 * signincontainer를 리턴
 * @returns
 */
const SigninPage = () => {
  const token = useToken();
  if (token !== null) {
    return <Redirect to="/" />;
  }
  return <SigninContainer />;
};

export default SigninPage;
