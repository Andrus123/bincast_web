import React from "react";
//import the Link component fom react-router
import Header from '../components/Header';
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
