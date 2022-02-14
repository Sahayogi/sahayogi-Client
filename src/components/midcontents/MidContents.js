import React from "react";
import styled from "styled-components";
import MidContent from "./MidContent";


const Container = styled.div`
display: flex;
padding:60px 40px;
justify-content: space-between;
background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
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
