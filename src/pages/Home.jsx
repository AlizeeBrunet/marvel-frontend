import React from "react";
import animationMarvel from "../assets/aninmation.marvel.gif";
import "../pages/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <img
        src={animationMarvel}
        alt="Marvel Animation"
        className="marvel-animation"
      />
    </div>
  );
};

export default Home;
