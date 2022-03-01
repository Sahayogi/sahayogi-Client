import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/sahayogi.png";
import { getRaiseFunds } from "../Web3Client";

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
const Photo = styled.img`
  height: 80px;
  object-fit: cover;
  display: flex;
  justify-content: center;
`;
const FundRaised = styled.div`
  color: white;
`;

const About = () => {
  const [raised, setRaised] = useState(false);
  const [id,setId]= useState('');
  const handleFund = () => {
    getRaiseFunds(id)
      .then((tx) => {
        console.log(tx);
        setRaised(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Photo src={logo} alt="" />
      <Description>CASH AND VOUCHER ASSISTANCE USING BLOCKCHAIN</Description>
      <FundRaised>
        <input
          type="id"
          placeholder="projectId"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button onClick={handleFund}>Raise Fund</button>
      </FundRaised>
    </Container>
  );
};

export default About;
