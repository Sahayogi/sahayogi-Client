import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  height: 50vh;
  position: relative;
 
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Dbutton = styled.button`
  border: none;
  padding: 10px;
  background-color: green;
  cursor: pointer;
  color: white;
  font-weight: 600;
  &:hover {
    background-color: grey;
  }
`;
const Status = styled.div`
  background-color: salmon;
  padding: 5px;
  color: white;
  border: none;
  margin-bottom: 30px;
`;

const MidContent = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />

      <Info>
       
        <Title>{item.title}</Title>
       
        <Dbutton>DONATE</Dbutton>
      </Info>
    </Container>
  );
};

export default MidContent;
