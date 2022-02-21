import React from "react";
import styled from "styled-components";
import { projects } from "../constants/Constant";

import Project from "./Project";

const Container = styled.div`
  min-height: calc(100vh - 80px);
 
  display: flex;
  padding: 60px 40px;
  justify-content: space-between;


  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Projects = ({donate}) => {
  
  return (
    <>
      <Container>
        {projects.map((item,id) => (
          <Project item={item} key={id} donate={donate}/>
        ))}
      </Container>
    </>
  );
};

export default Projects;
