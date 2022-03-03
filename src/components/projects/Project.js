import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { countOfFunding } from "../../utils/getBlockchainData";
import { getRaiseFunds } from "../../Web3Client";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  position: relative;
  background-color: #111;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: black;
  color: #fff;
  border-radius: 2px;
  margin: 15px 15px;
  border-radius: 1rem;
`;
const Image = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 1rem 1rem 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  color: gray;
`;
const Info = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  margin-top: 10px;
`;
const Title = styled.h1`
  color: white;
  font-size: 20px;
`;

const Dbutton = styled.button`
  border: none;
  padding: 30px;
  background-color: green;
  cursor: pointer;
  color: white;
  font-weight: 600;
  border-radius: 2px;
  margin-bottom: 20px;
  &:hover {
    background-color: grey;
  }
`;
const Status = styled.div`
  background-color: #5cb85c;
  padding: 5px;
  color: white;
  border: none;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 4px;
  color: #333;
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  color: white;
  font-weight: bolder;
  margin-top: 20px;
`;

const Line = styled.div`
  width: 320px;
  height: 5px;
  margin-top: 10px;
  background: #0ebeff;
`;

const Project = ({ item, donate, show, setProjectId }) => {
  const [dAmount, setDAmount] = useState("");
  const [pcount, setPcount] = useState("");
  const handleDonate = (_id) => {
    show((prev) => !prev);
    setProjectId(_id);
    console.log(_id);
  };
  const getDonatedAmount = () => {
    countOfFunding().then((pcount) => {
      console.log("count:", pcount);
      setPcount(pcount);
      getRaiseFunds(pcount)
        .then((dAmount) => {
          setDAmount(dAmount);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getDonatedAmount();
  }, []);

  return (
    <Container>
      {/* <Image src={item.description} /> */}
      <Image>
        <label>{item.description}</label>
      </Image>
      <Info>
        <Title>{item.projectName}</Title>
        <Line></Line>
        <Label>Donations (SYT)</Label>
        {/* <Count></Count> */}

        <Title>{dAmount.donated}</Title>
        <Title>{item.targetedArea}</Title>
        <Status>{item.status}</Status>
        {donate && (
          <Dbutton onClick={() => handleDonate(item.relateBlockProj)}>DONATE NOW</Dbutton>
        )}
      </Info>
    </Container>
  );
};

export default Project;
