import React, { useState } from "react";
import styled from "styled-components";
import Beneficiary from "./Beneficiary";
import { FcDisclaimer } from "react-icons/fc";
import { getOwnBalance } from "../../Web3Client";

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
const SubContainer = styled.div`
  height: 500px;
  width: 700px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  gap: 4rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Claim = styled.div`
  height: 160px;
  width: 160px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  border: none;
  border-radius: 80px;
  font-weight: bolder;
  background-color: rgb(61, 60, 60);
  /* background-color: white; */
  color: white;
  font-size: 40px;
`;
const ClaimedBal = styled.button`
  height: 60px;
  width: 160px;
  padding: 15px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  border: none;
  border-radius: 10px;
  font-weight: bolder;
  background-color: green;
  color: white;
  font-size: 18px;
  &:hover {
    background-color: rgb(61, 60, 60);
  }
`;

const BeneClaim = () => {
  const [balance, setBalance] = useState(0);
  const fetchBalance = () => {
    getOwnBalance()
      .then((balance) => {
        setBalance(balance);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container>
      <Beneficiary />
      <SubContainer>
        <Claim>
          <FcDisclaimer />
        </Claim>
        <ClaimedBal>Claim Donation</ClaimedBal>
        <ClaimedBal onClick={fetchBalance}>Balance</ClaimedBal>

        <p>Your Balance is {balance}</p>
      </SubContainer>
    </Container>
  );
};

export default BeneClaim;
