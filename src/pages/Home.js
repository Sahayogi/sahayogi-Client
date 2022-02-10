import React from "react";
import styled from "styled-components";
import Footer from "../components/footer /Footer";
import MidContents from "../components/midcontents/MidContents";
import Projects from "../components/projects/Projects";

const Container = styled.div`
  display: flex;
  height: 60vh;
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
        {/* <Photo src="https://www.humanosphere.org/wp-content/uploads/2015/04/NepalQuakesurvivors20151.jpg" /> */}
        <Photo src="https://s.wsj.net/public/resources/images/BN-ID089_042815_M_20150428095046.jpg" />
      </Container>
      <MidContents/>
      <Projects/>
      <Footer />
    </>
  );
};

export default Home;
