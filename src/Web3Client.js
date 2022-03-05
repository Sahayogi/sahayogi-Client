import Web3 from 'web3';
import SahayogiTokenBuild from './abi/SahayogiToken.json';
import FundRaisingBuild from './abi/FundRaising.json';
import SahayogiAgencyBuild from './abi/SahayogiAgency.json';
import { getToken, getUserEmail } from './components/constants/Constant';
import { PROOFS } from './proofs/proofs';
import axios from 'axios';

let frContract;
let sytContract;
let saContract;
let selectedAccount;
let isInitialized = false;

let proof = [];
let currentIndex = 0;
let amount = 0;

PROOFS.forEach((parameter, index) => {
  if (parameter.account == selectedAccount) {
    proof = parameter.proofs;
    amount = parameter.amount;
    currentIndex = index;
    return;
  }
});

console.log(PROOFS);

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

export const getBlockchain = async (setAccountAddress) => {
  let provider = window.ethereum;
  if (typeof provider !== 'undefined') {
    provider
      .request({
        method: 'eth_requestAccounts',
      })
      .then((accounts) => {
        selectedAccount = accounts[0];
        if (selectedAccount) {
          updateWalletAddress(selectedAccount);
        }
        setAccountAddress(selectedAccount);
        console.log(`selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0];
      console.log(`selected account changed to is ${selectedAccount}`);
    });

    const web3 = new Web3(provider);
    // const networkId = await web3.eth.net.getId();

    sytContract = new web3.eth.Contract(
      SahayogiTokenBuild.abi,
      // SahayogiTokenBuild.networks[networkId].address
      '0xd4971aa8F6D5C7381F8c93987D54d5FB76cB4Fe9'
    );
    frContract = new web3.eth.Contract(
      FundRaisingBuild.abi,
      // FundRaisingBuild.networks[networkId].address
      '0xb780522e0941142AA1AA97c6b58440fC618d1C56'
    );
    saContract = new web3.eth.Contract(
      SahayogiAgencyBuild.abi,
      '0x994e98e32198B42903404B9FEe2aaA205ceaB13E'
    );

    // let tokenAmount = amount / 10 ** 18;

    isInitialized = true;
  }
};

export const claimByBene = async (projectId) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  [
    {
      account: '0x0b87859441DCeAeBC608630F8132FD1A1866CeC2',
      proofs: [
        '0x62ae38db4b663f8e77eeb840162d3d9a9fa692c10499031dc14cbfaa0e61634b',
      ],
      amount: '500000000000000000000',
      index: '0',
    },
    {
      account: '0x566ACB56e7Dd7c3F4C2Eb2Cc89190F310564550C',
      proofs: [
        '0x0a149dc2b7fb5330413b9b44c8787b0aea8fe4cb228da1582108bd0a984cf85f',
      ],
      amount: '500000000000000000000',
      index: '1',
    },
  ].forEach((parameter, index) => {
    console.log('Proof ForEach func');
    console.log('parameter.account', parameter.account.toLowerCase());
    console.log(' SA', selectedAccount);
    if (parameter.account.toLowerCase() == selectedAccount) {
      console.log('Matched sa with pa');
      proof = parameter.proofs;
      amount = parameter.amount;
      currentIndex = index;
      return;
    }
  });

  console.log('proof', proof);
  return saContract.methods
    .claim(projectId, currentIndex, selectedAccount, amount, proof)
    .estimateGas({
      from: selectedAccount,
    })
    .then((gasAmounnt) => {
      console.log(gasAmounnt);
      saContract.methods
        .claim(projectId, currentIndex, selectedAccount, amount, proof)
        .send({
          from: selectedAccount,
          gasLimit: gasAmounnt,
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getOwnBalance = () => {
  return sytContract.methods.balanceOf(selectedAccount).call();
};
export const getTotalSupply = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return sytContract.methods.totalSupply().call();
};

export const approve = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return sytContract.methods
    .approve('0xb780522e0941142AA1AA97c6b58440fC618d1C56', 1000000)
    .send({
      from: selectedAccount,
    });
};
export const transact = async (to, amount) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return sytContract.methods.transfer(to, amount).send({
    from: selectedAccount,
  });
};
export const doDonate = async (id, amount) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return frContract.methods.donate(id, amount).send({
    from: selectedAccount,
  });
};
export const getRaiseFunds = async (id) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return frContract.methods.raiseFunds(id).call();
};
export const getFundingCount = async () => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return frContract.methods.count().call();
};
