import React, { useState } from "react";
import styled from "styled-components";
import { dropDownMenu } from "../constants/Constant";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin-top: 140px;

  
 
`;
const DropMenu = styled.div`
  height: 100px;
  z-index: auto;
  width: 300px;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;




 
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  border: 1px white solid;
  padding:10px;

 
`;

const DropDown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container onClick={handleClick}>
      <DropMenu>
        {
          dropDownMenu.map((val) => {
            return (
              <Link to={val.path} onClick={() => setClick(false)}>
                <MenuItem>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </MenuItem>
              </Link>
            );
          })}
      </DropMenu>
    </Container>
  );
};

export default DropDown;
