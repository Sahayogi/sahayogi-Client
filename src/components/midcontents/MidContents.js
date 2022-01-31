import React from "react";
import styled from "styled-components";
import MidContent from "./MidContent";


const Container = styled.div`
display: flex;
padding:0px 20px;
justify-content: space-between;
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
