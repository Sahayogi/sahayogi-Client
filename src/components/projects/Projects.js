import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../constants/Constant";
import { doDonate } from "../../Web3Client";
import Project from "./Project";


const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  padding: 60px 40px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const MainPopup = styled.div`
z-index: 100;
width: 100%;
position: absolute;
justify-content: center;
align-items: center;
display: flex;

`
const Popup = styled.div`
  z-index: 100;
  background-color: white;
  position: absolute;
  background: #fff;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  height: 60vh;
  border: 1px solid black;
  width: 40%;
  margin-top: 25%;
  background: rgba(255, 255, 255, 0.25);
 box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
 backdrop-filter: blur(7px);
 -webkit-backdrop-filter: blur(7px);
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  display:flex;
  flex: 1;
  margin: auto;
  margin-top: 30px;
  background-color:#535657;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: white;
  }
`;
const H1 = styled.h1`
margin-top: 60px;
padding: 20px;
font-weight: 700;
font-family: "Roboto";
line-height: 1.8;
word-spacing: 10px;
text-align: center;
`
const Button = styled.button`
  height: 40px;
  width: auto;
  padding: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display:flex;
  flex: 1;
  margin: auto;
  border: none;
  align-self: center;
  border-radius: 10px;
  background-color:#24a0ed;
  color: white;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 20px; 
  &:hover {
    background-color: #2546bd;
  }
`;

const CloseButton = styled.button`
position: relative;
    float: right;
    background: red;
	color: white;
    top: -5px;
    right: -5px;
    padding:10px`
const Projects = ({ donate }) => {
  const [show, setShow] = useState(false);
  const [donated, setDonated] = useState(false);
  const [projectId, setProjectId] = useState("");
  const [amount, setAmount] = useState(0);
  const registerDonate = () => {
    doDonate(projectId, amount).then(tx => {
      console.log(tx);
      setDonated(true);
    }).catch((err) => {
      console.log(err);

    })
    console.log(projectId);
    console.log(amount)

  };
  const handleCross = () => {
    setShow(false)
  }

  return (
    <>
      <Container>
        {show && (
          <MainPopup>
            <Popup>
              {/* <input type="string" placeholder="id" /> */}
              <CloseButton onClick={handleCross}>X</CloseButton>
              <H1>Charity is An Act of A soft Heart.</H1>
              <Input type="string" placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
              <Button onClick={registerDonate}>ok</Button>
            </Popup></MainPopup>
        )}
        {projects.map((item, index) => (
          <Project item={item} show={setShow} setProjectId={setProjectId} key={item.id} donate={donate} />
        ))}
      </Container>
    </>
  );
};

export default Projects;
