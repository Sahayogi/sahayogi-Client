import "./Navbar.css";
import logo from "../../assets/sahayogi.png";
import React from "react";
import styled from "styled-components";
import Home from "../../pages/Home";
import { Button } from "@material-ui/core";

const Container = styled.div`
  height: 80px;
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 100%;
  display: flex;
  background-image: linear-gradient(
    to left,
    #8c908c,
    #777c7a,
    #646969,
    #535657,
    #424445,
    #393b3c,
    #313233,
    #292a2b,
    #262828,
    #242626,
    #222323,
    #202120
  );
`;
const NavbarLeft = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
`;
const NavbarRight = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin: 20px;
`;

const StyledButton = styled.button`
  background-color: rgb(43, 41, 41);
  color: white;
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
`;
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-self: auto;
  gap: 1rem;
`;
const MenuTitle = styled.div`
  display: flex;
  color: white;
  font-size: 15px;
  align-items: center;
  padding-right: 30px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavbarLeft>
          <img src={logo} alt="" />
        </NavbarLeft>

        <NavbarRight>
          <MenuTitle>Home</MenuTitle>
          <MenuTitle>About</MenuTitle>

          <MenuItem>
            <StyledButton>Register</StyledButton>
            <StyledButton>Login</StyledButton>
          </MenuItem>

          {/* <FiBell
            className="bell"
            onClick={() => setNotification(!notification)}
          /> */}
        </NavbarRight>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
