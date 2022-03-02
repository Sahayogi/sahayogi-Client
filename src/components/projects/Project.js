import { SettingsPhoneTwoTone } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  position: relative;
	background-color:#111;
	width:100vw;
	display:flex;
	align-items:center;
	justify-content:center;
	flex-wrap:wrap;
	background-color :black;
	color:#fff;
	border-radius:2px;
	margin:15px 15px;
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
  background-color: #a099ff;
  background-image: radial-gradient(
      at 83% 67%,
      rgb(152, 231, 156) 0,
      transparent 58%
    ),
    radial-gradient(at 67% 20%, hsla(357, 94%, 71%, 1) 0, transparent 59%),
    radial-gradient(at 88% 35%, hsla(222, 81%, 65%, 1) 0, transparent 50%),
    radial-gradient(at 31% 91%, hsla(9, 61%, 61%, 1) 0, transparent 52%),
    radial-gradient(at 27% 71%, hsla(336, 91%, 65%, 1) 0, transparent 49%),
    radial-gradient(at 74% 89%, hsla(30, 98%, 65%, 1) 0, transparent 51%),
    radial-gradient(at 53% 75%, hsla(174, 94%, 68%, 1) 0, transparent 45%);
  
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
  margin-top:10px;
  
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
  margin-top:20px;
`;

const Line = styled.div`
width:320px;
			height:5px;
			margin-top:10px;
      background: #0ebeff;`

const Project = ({ item, donate, show, setProjectId }) => {
  const handleDonate = (_id) => {
    show((prev) => !prev);
    setProjectId(_id);
    console.log(_id);
  };

  return (
    <Container>
      {/* <Image src={item.description} /> */}
      <Image>{item.description}</Image>
      <Info>
        <Title>{item.projectName}</Title>
        <Line></Line>
        <Label>Donations (SYT)</Label>
        <Title>{item.collectedToken}</Title>
        <Title>{item.targetedArea}</Title>
        <Status>{item.status}</Status>
        {donate && (
          <Dbutton onClick={() => handleDonate(item._id)}>DONATE NOW</Dbutton>
        )}
      </Info>
    </Container>
  );
};

export default Project;
