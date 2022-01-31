import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 200px;
  background-color: rgb(53, 51, 51);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
    const date2 = new Date();
    const year = date2.getFullYear();
  return (
    <FooterContainer>
      All rights reserved &copy; {year} || @Sahayogi{" "}
    </FooterContainer>
  );
};

export default Footer;
