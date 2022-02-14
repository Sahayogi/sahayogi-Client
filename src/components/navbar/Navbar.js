import logo from "../../assets/sahayogi.png";
import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
// import { FaArrowLeft } from "react-icons/fa";

import Metamask from "../metamask/Metamask";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavLeft>
        <img src={logo} alt="" />
      </NavLeft>
      <MobileMenu onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </MobileMenu>

      <NavMenu>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/about">About</MenuLink>
        <MenuLink href="/donate">Donate</MenuLink>
        <MenuLink href="/projects">Projects</MenuLink>
        <MenuLink href="/login">Login</MenuLink>
        <Metamask />
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
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
const NavLeft = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
`;
const MobileMenu = styled.div`
  font-size: 1.8rem;
  color: white;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
  }
`;
const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  transform: all o.3s ease-in;
  font-size: 20px;

  &:hover {
    color: black;
  }
`;

export default Navbar;
