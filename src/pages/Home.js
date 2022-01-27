import React from "react";
import Navbar from "../components/navbar/Navbar";
import styled from "styled-components";
import home from "../assets/Home1.jpg";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeImage">
      <img src={home} alt="" />
        <div className="homeTitle">

        </div>
        
      </div>
      ]
    </div>
  );
};

export default Home;
