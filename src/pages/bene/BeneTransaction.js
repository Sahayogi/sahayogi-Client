import React from "react";
import styled from "styled-components";
import Beneficiary from "./Beneficiary";
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
  display: flex;
  flex: 1;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Info = styled.div`
  height: 500px;
  width: 700px;
  padding:20px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
   
  }
 
`;

const BeneTransaction = () => {
  return (
    <Container>
      <Beneficiary />
      <Info>
    
      </Info>
    </Container>
  );
};

export default BeneTransaction;
