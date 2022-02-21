import React, { useState } from 'react';
import styled from 'styled-components';
import BeneMenu from './BeneMenu';
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
const Beneficiary = () => {
  const [click, setClick] = useState(false);
  const [beneMenu, setBeneMenu] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setBeneMenu(true);
  };

  return (
    <Container>
      <ExtendMenu onClick={handleClick}>
        <BiListUl />
      </ExtendMenu>
      {click && beneMenu && <BeneMenu />}
    </Container>
  );
};

export default Beneficiary;
