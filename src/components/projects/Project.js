import { SettingsPhoneTwoTone } from "@material-ui/icons";
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
  background-color: green;
  padding: 5px;
  color: white;
  border: none;
  margin-bottom: 30px;
`;
const Label = styled.label`
  color: white;
  font-weight: bolder;
`;

const Project = ({ item, donate, show, setProjectId }) => {
  const handleDonate = (_id) => {
    show((prev) => !prev);
    setProjectId(_id);
  };

  return (
    <Container>
      <Image src={item.img} />

      <Info>
        <Status>{item.status}</Status>
        <Title>{item.title}</Title>
        <Label>Donations (SYT)</Label>
        <Title>{item.donations}</Title>
        {donate && (
          <Dbutton onClick={() => handleDonate(item.id)}>DONATE</Dbutton>
        )}
      </Info>
    </Container>
  );
};

export default Project;
