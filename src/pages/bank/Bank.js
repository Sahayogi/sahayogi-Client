import React, { useState } from 'react';
import styled from 'styled-components';
import BankMenu from './BankMenu';
import { BiListUl } from 'react-icons/bi';

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
  cursor: pointer;
`;
const Bank = () => {
  const [click, setClick] = useState(false);
  const [bankMenu, setBankMenu] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setBankMenu(true);
  };

  return (
    <Container>
      <ExtendMenu onClick={handleClick}>
        <BiListUl />
      </ExtendMenu>
      {click && bankMenu && <BankMenu />}
    </Container>
  );
};

export default Bank;
