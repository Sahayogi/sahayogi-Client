import "./Navbar.css";
import logo from "../../assets/sahayogi.png";
import React from "react";
import styled from "styled-components";

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
  margin: 10px;
`;

const MenuItem = styled.div`
  display: flex;
  color: white;
  align-items: center;
  padding-right: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <NavbarLeft>
          <img src={logo} alt="" />
        </NavbarLeft>

        <NavbarRight>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>

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
