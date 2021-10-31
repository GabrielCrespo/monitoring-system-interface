import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Login from "../../components/Login";

function LoginTeacher() {
  return (
    <>
      <Header />
      <Login name="Professor" />
      <Footer />
    </>
  );
}

export default LoginTeacher;
