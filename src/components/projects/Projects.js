import React from "react";
import styled from "styled-components";
import { projects } from "../constants/Constant";

import Project from "./Project";

const Container = styled.div`
  display: flex;
  padding: 60px 40px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Projects = () => {
  return (
    <>
      <Container>
        {projects.map((item) => (
          <Project item={item} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
