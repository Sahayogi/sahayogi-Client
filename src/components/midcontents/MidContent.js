import React from "react";
import styled from "styled-components";
import vendorImg from "../../assets/vendor.png";
import donorImg from "../../assets/donor.jpg";
import beneficiaryImg from "../../assets/bene.jpg";
import bankImg from "../../assets/bank.jpg";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  margin: 4px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex: 1; */
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;
const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 150px;
  object-fit: cover;
  cursor: pointer;

  padding-right: 10px;
`;

const Title = styled.h1`
  padding-top: 5px;
  color: white;
  margin-bottom: 20px;
`;

const TitleDiv = styled.div`
     display: flex;
     /* background-color: pink; */
     padding:20px;
`;
const MidContent = ({}) => {
  return (
    <Container>
      <TitleDiv>
        <Title>IMPORTANT COMPONENTS OF OUR PROJECT</Title>
      </TitleDiv>

      <ImageContainer>
        <SubContainer>
          <Link to="/vendorinfo">
            <Image src={vendorImg} alt="" />
          </Link>
          <Title>vendor</Title>
        </SubContainer>

        <SubContainer>
          <Link to="/bankinfo">
            <Image src={bankImg} alt="" />
          </Link>
          <Title>bank</Title>
        </SubContainer>
        <SubContainer>
          <Link to="/beneinfo">
            <Image src={beneficiaryImg} alt="" />
          </Link>
          <Title>beneficiary</Title>
        </SubContainer>
        <SubContainer>
          <Link to="/donate">
            <Image src={donorImg} alt="" />
          </Link>
          <Title>donor</Title>
        </SubContainer>
      </ImageContainer>
    </Container>
  );
};

export default MidContent;
