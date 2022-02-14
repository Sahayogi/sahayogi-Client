import React, { useState } from "react";
import styled from "styled-components";
import { dropDownMenu } from "../constants/Constant";
import LogoutIcon from "@mui/icons-material/Logout";

import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  margin-top: 149px;
  margin-left: -312px;
  height: 100px;
  width: 300px;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  z-index: auto;
`;
const DropMenu = styled.div`
  z-index: 1;
  background-color: rgb(61, 60, 60);
  color: white;
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border:none;
  padding: 10px;
`;
const LogoutButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(61, 60, 60);
  padding: 10px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  border: none;
  &:hover {
    background-color: grey;
  }
`;

const DropDown = ({}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container onClick={handleClick}>
      <Wrapper>
        <DropMenu>
          {/* {dropDownMenu.map((val) => {
            return (
              <Link to={val.path} onClick={() => setClick(false)}>
                <MenuItem>
                  <div id="icon">{val.icon}</div>
                  <div id="title">{val.title}</div>
                </MenuItem>
              </Link>
            );
          })} */}
          <LogoutButton>
            <LogoutIcon />
            Logout
          </LogoutButton>
        </DropMenu>
      </Wrapper>
    </Container>
  );
};

export default DropDown;
