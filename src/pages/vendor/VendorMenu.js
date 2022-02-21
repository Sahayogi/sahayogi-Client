import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 300px;
  width: 200px;
  color: white;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    width:100%;
    flex-direction: column;
  
  }
 
`;
const MenuLink = styled.div`
  display: flex;
  cursor: pointer;
  transform: all o.3s ease-in;
  font-size: 25px;
  padding: 40px 20px;
  &:hover {
    color: black;
  }
`;

const VendorMenu = () => {
  return (
    <Container>
      <Link to="/vendorinfo">
        <MenuLink>Vendor</MenuLink>
      </Link >
      <Link to="/vendortransaction">
        {" "}
        <MenuLink>Transactions</MenuLink>
      </Link>
      <Link to="/vendortransfer">
        {" "}
        <MenuLink>Transfer</MenuLink>
      </Link>
    </Container>
  );
};

export default VendorMenu;
