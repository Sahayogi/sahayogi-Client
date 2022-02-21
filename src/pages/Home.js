import React from "react";
import styled from "styled-components";
import Footer from "../components/footer /Footer";
import MidContents from "../components/midcontents/MidContents";
import Projects from "../components/projects/Projects";
import home from "../assets/home.jpg";

const Container = styled.div`
  min-height: 100vh;
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
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
