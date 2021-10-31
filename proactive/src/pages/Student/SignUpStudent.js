import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUp from "../../components/SignUp";

function signUpStudent() {
  return (
    <>
      <Header />
      <SignUp name="Aluno" />
      <Footer />
    </>
  );
}

export default signUpStudent;
