import React, { useState } from "react";
import styled from "styled-components";

import { BiArrowToBottom } from "react-icons/bi";
import VendorMenu from "./VendorMenu";

const Container = styled.div`
  top: 80px;
  @media screen and (max-width: 768px) {
    position: sticky;
  }
`;
const ExtendMenu = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  padding: 10px;
  font-size: 40px;
`;
const Vendor = () => {
  const [click, setClick] = useState(false);
  const [bankMenu, setBankMenu] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setBankMenu(true);
  };

  return (
    <Container>
      <ExtendMenu onClick={handleClick}>
        <BiArrowToBottom />
      </ExtendMenu>
      {click && bankMenu && <VendorMenu />}
    </Container>
  );
};

export default Vendor;
