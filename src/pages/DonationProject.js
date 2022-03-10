import React from "react";
import Projects from "../components/projects/Projects";
import styled from "styled-components";
const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
`;

const DonationProject = () => {
  return (
    <Container>
      <Projects donate={false} />
    </Container>
  );
};

export default DonationProject;
