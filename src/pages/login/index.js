import React from 'react';
import LoginForm from '../../components/login';
import LoginLayout from '../../layouts/login-layout';

function LoginPage() {
  return (
    <LoginLayout>
      <LoginForm/>
      {/* TODO: Add link of signup and forget password*/}
    </LoginLayout>

  );
}

export default LoginPage;
