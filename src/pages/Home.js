import React from "react";
import styled from "styled-components";
import Footer from "../components/footer /Footer";
import MidContents from "../components/midcontents/MidContents";
import Projects from "../components/projects/Projects";
import home from "../assets/home.jpg";
import Charts from "../components/chart/Charts"
import {donationData} from "../components/constants/Constant"

const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  height: 65vh;
  flex-direction: column;
`;
const Photo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Photo src={home} />
      </Container>
      <MidContents />
     
      <Footer />
    </>
  );
};

export default Home;
