import logo from "../../assets/sahayogi.png";
import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Metamask from "../metamask/Metamask";
import DropDown from "../metamask/DropDown";
// import { Link as LinkR} from 'react-router-dom'
const Wrapper = styled.div`
  position: sticky;
  top: 0;
  height: 80px;
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
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
  }
`;
const NavbarLeft = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: white;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
const NavbarRight = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const StyledButton = styled.div`
//   background-color: rgb(43, 41, 41);
//   color: white;
//   font-size: 15px;
//   padding: 10px;
//   border-radius: 10px;
//   cursor: pointer;
//   border: none;
// `;
const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-self: auto;
  gap: 1rem;
`;
const MenuTitle = styled.div`
  color: white;
  font-size: 15px;
  padding-right: 30px;
`;

const Navbar = () => {
  const [click, setClick] = useState(fase);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Wrapper>
        <NavbarLeft>
          <img src={logo} alt="" />
        </NavbarLeft>

        <MobileIcon onClick={handleClick}>
          {click ? <FaArrowLeft /> : <FaBars />}
        </MobileIcon>
        <NavbarRight>
          <Link to="/" >
            <MenuTitle>Home</MenuTitle>
          </Link>
          <Link to="/about">
            <MenuTitle>About</MenuTitle>
          </Link>
          <Link to="/donate">
            <MenuTitle>Donate</MenuTitle>
          </Link>
          <Link to="/donationProject">
            <MenuTitle>Projects</MenuTitle>
          </Link>
          {/* 
          <Link to="/register">
            <MenuTitle>Register</MenuTitle>
          </Link> */}
          <Link to="/login">
            <MenuTitle>Login</MenuTitle>
          </Link>
          <MenuItem>
            <Metamask />
          </MenuItem>
        </NavbarRight>
      </Wrapper>
    </>
  );
};

export default Navbar;
