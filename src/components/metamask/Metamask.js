import { KeyboardArrowDown } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
const Container = styled.div`
  display: flex;
`;

const Connect = styled.button`
  height: 40px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  border: none;
  border-radius: 4rem;
  background-color: black;
  color: white;
`;

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  return account;
}

const Metamask = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const connectMetamask = () => {
    if (typeof window !== "undefined") {
      getAccount().then((response) => {
        setAccountAddress(response);
      });
    }
  };
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdown(true);
  };

  return (
    <Container>
      <Connect variant="contained" onClick={connectMetamask}>
        {!!accountAddress ? accountAddress : "Connect Wallet"}
        {accountAddress && <KeyboardArrowDown onClick={handleClick} />}
        {click && dropdown && <DropDown />}
      </Connect>
    </Container>
  );
};

export default Metamask;
