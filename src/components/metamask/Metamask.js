import { KeyboardArrowDown } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
        {!!accountAddress
          ? `${accountAddress.slice(0, 6)}...${accountAddress.slice(
              accountAddress.length - 4,
              accountAddress.length
            )}`
          : "Connect Wallet"}
        {accountAddress && <KeyboardArrowDown onClick={handleClick} />}
      </Connect>
      {click && dropdown && <DropDown />}
    </Container>
  );
};

export default Metamask;
