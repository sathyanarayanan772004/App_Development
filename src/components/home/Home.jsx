import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <Fade triggerOnce="true">
        <Header />
      </Fade>
      <Fade bottom triggerOnce="true">
      </Fade>
      <Footer />
    </>
  );
};

export default Home;
