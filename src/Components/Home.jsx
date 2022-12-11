import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
