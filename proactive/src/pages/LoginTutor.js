import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

function LoginTutor() {
  return (
    <>
      <Header />
      <Login name="Tutor" />
      <Footer />
    </>
  );
}

export default LoginTutor;
