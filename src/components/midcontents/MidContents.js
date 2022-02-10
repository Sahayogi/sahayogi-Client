import React from "react";
import styled from "styled-components";
import MidContent from "./MidContent";


const Container = styled.div`
display: flex;
padding:60px 40px;
justify-content: space-between;
background-image: linear-gradient(to right bottom, #343233, #3e3d3f, #49494a, #545556, #606162, #656667, #696b6c, #6e7071, #6c6f70, #6a6e6f, #696e6e, #676d6d);

@media screen and (max-width: 768px) {
   
    display: flex;
    flex-direction: column;
  }
`;
const MidContents = () => {
  return (
    <Container>
     <MidContent/>
    </Container>
  );
};

export default MidContents;
