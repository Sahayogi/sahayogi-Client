import React from "react";
import Projects from "../components/projects/Projects";
import styled from "styled-components";

const Container = styled.div`
  background-color: grey;
`;

const DonationProject = () => {
  return (
    <Container>
      <Projects donate={false}/>
    </Container>
  );
};

export default DonationProject;
