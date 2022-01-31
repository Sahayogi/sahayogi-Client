import React from 'react';
import style from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { styled } from '@mui/system';

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: grey;
  display: grid;
  align-items: center;
  top: 0px;
  left: 0px;
  transform: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
const CloseIcon = styled(FaTimes)`
   color:#fff;
`;

const Icon = styled.div`
  position:absolute;
  cursor: pointer;
  outline:none;
  font-size: 2rem;
  background: transparent;
  right:1.5rem;
  top:1.2rem;
  
  `;

const sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
    </SidebarContainer>
  );
};

export default sidebar;
