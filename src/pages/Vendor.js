import React from "react";
import styled from "styled-components";


const Container = styled.div`
  height: 100vh;
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;
const Description = styled.div`
  color: white;
  padding: 20px;
`;


const Vendor = () => {
  return (
    <Container>
     
      <Description>Total vendor</Description>
    </Container>
  );
};

export default Vendor;
