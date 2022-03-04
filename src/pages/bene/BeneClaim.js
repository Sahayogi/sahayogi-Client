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
  
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Claim = styled.div`
height: 60px;
width:60px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  border: none;
  border-radius: 50%;
  font-weight: bolder;
  background-color: white;
  /* background-color: white; */
  color: black;
  font-size: 40px;
  position:absolute;
  top:19%;
  z-index: 2;
  box-shadow: 2px 2px 2px 2px #A9A9A9;
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

const ClaimDon = styled.div`
background-color: white;
justify-content: center;
width: 450px;
height:150px;
padding-top: 70px;
display: flex;
border-radius: 10px 10px 15px 15px;
z-index:1;
`
const ClaimBal = styled.div`
width: 450px;
height:200px;
justify-content: center;
display: flex;
background-color:#777c7a;
margin-top:-20px;
padding-top:40px;
flex-direction: column;
align-items: center;

.p{
  flex:1;
  padding-bottom: 30px;
}`

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
        <ClaimDon>
          <ClaimedBal>Claim Donation</ClaimedBal>
        </ClaimDon>
        <ClaimBal>
          <p>Your Balance is {balance}</p>
          <ClaimedBal onClick={fetchBalance}>Balance</ClaimedBal>
        </ClaimBal>

      </SubContainer>
    </Container>
  );
};

export default BeneClaim;
