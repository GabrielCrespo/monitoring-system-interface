import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

function LoginStudent() {
  return (
    <>
      <Header />
      <Login name="Aluno" />
      <Footer />
    </>
  );
}

export default LoginStudent;
