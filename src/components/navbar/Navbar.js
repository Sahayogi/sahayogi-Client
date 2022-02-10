import logo from "../../assets/sahayogi.png";
import React from "react";
import styled from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
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
const NavbarCenter = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  padding-right: 10px;
  margin: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledButton = styled.div`
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

  const {data:{role}} = useAuth();
  return (
    <>
      <Wrapper>
        <NavbarLeft>
          <img src={logo} alt="" />
        </NavbarLeft>
        <NavbarCenter>
          <LocalPhoneIcon />
          9810444204
        </NavbarCenter>

        <MobileIcon>
          <FaBars />
        </MobileIcon>

        <NavbarRight>
          <Link to="/">
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
          <MenuItem>
          <Link to="/register"> <StyledButton>Register</StyledButton></Link>
          <Link to="/login">  <StyledButton>Login</StyledButton></Link>
          </MenuItem>
        </NavbarRight>
      </Wrapper>
    </>
  );
};

export default Navbar;
