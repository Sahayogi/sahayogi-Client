import { KeyboardArrowDown } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import { getToken, getUserEmail } from '../constants/Constant';
import axios from 'axios';
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
  background-color: rgb(61, 60, 60);
  color: white;
`;
const updateWalletAddress = async (accountAddress) => {
  const token = getToken();
  const email = getUserEmail();
  console.log('UpdateWallet Called');
  console.log(`Token`, token);
  if (token) {
    // Axios hit to update corresonding acc
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    console.log('Checkpoint');
    try {
      const { data } = await axios.post(
        'http://localhost:5005/api/wallet/connected',
        { accountAddress, email },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }
};

async function getAccount() {
  const accounts = await window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  const account = accounts[0];
  return account;
}

const Metamask = () => {
  const [accountAddress, setAccountAddress] = useState('');
  const connectMetamask = () => {
    if (typeof window !== 'undefined') {
      getAccount().then((response) => {
        setAccountAddress(response);
        console.log(`resp`, response);

        // Axios req to update logged in user's walletaddress
        if (response) {
          updateWalletAddress(response);
        }
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
      <Connect variant='contained' onClick={connectMetamask}>
        {!!accountAddress
          ? `${accountAddress.slice(0, 6)}...${accountAddress.slice(
              accountAddress.length - 4,
              accountAddress.length
            )}`
          : 'Connect Wallet'}
        {accountAddress && <KeyboardArrowDown onClick={handleClick} />}
      </Connect>
      {accountAddress && click && dropdown && (
        <DropDown setAccountAddress={setAccountAddress} />
      )}
      {}
    </Container>
  );
};

export default Metamask;
