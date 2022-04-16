import Web3 from "web3";
import SahayogiTokenBuild from "./abi/SahayogiToken.json";
import FundRaisingBuild from "./abi/FundRaising.json";
import SahayogiAgencyBuild from "./abi/SahayogiAgency.json";
import { getToken, getUserEmail } from "./components/constants/Constant";
import { PROOFS } from "./proofs/proofs";
import axios from "axios";

let frContract;
let sytContract;
let saContract;
let selectedAccount;
let isInitialized = false;

let proof = [];
let currentIndex = 0;
let amount = 0;

PROOFS.forEach((parameter, index) => {
  if (parameter.account === selectedAccount) {
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
  console.log("UpdateWallet Called");
  console.log(`Token`, token);
  if (token) {
    // Axios hit to update corresonding acc
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    console.log("Checkpoint");
    try {
      const { data } = await axios.post(
        "http://localhost:5005/api/wallet/connected",
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
  if (typeof provider !== "undefined") {
    provider
      .request({
        method: "eth_requestAccounts",
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

    window.ethereum.on("accountsChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(`selected account changed to is ${selectedAccount}`);
    });

    const web3 = new Web3(provider);
    // const networkId = await web3.eth.net.getId();
    sytContract = new web3.eth.Contract(
      SahayogiTokenBuild.abi,
      // SahayogiTokenBuild.networks[networkId].address
      "0xe600c455278302F0C9eA2399bE9f104897BAe887"
    );
    frContract = new web3.eth.Contract(
      FundRaisingBuild.abi,
      // FundRaisingBuild.networks[networkId].address
      "0x39456a87E4a7F1B25e0b5E58f61ba9B41072D4Cd"
    );
    saContract = new web3.eth.Contract(
      SahayogiAgencyBuild.abi,
      "0x1C92c66caA1040195270909bA44D3EA0c9322b6E"
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
      account: "0xbB729f824D6C8Ca59106dcE008265A74b785aa99",
      proofs: [
        "0x2d04e836cb3b99de12825816e7ba075f8b2d06e222782569ffac244afa45da87",
      ],
      amount: "7000000000000000000000",
      index: "0",
    },
    {
      account: "0x566ACB56e7Dd7c3F4C2Eb2Cc89190F310564550C",
      proofs: [
        "0xfb1cb31cec049a0bacc4348334a0d82d10616c6ed6688c606f78dc20adaf43e0",
      ],
      amount: "3000000000000000000000",
      index: "1",
    },
  ].forEach((parameter, index) => {
    console.log("Proof ForEach func");
    console.log("parameter.account", parameter.account.toLowerCase());
    console.log(" SA", selectedAccount);
    if (parameter.account.toLowerCase() === selectedAccount) {
      console.log("Matched sa with pa");
      proof = parameter.proofs;
      amount = parameter.amount;
      currentIndex = index;
      return;
    }
  });

  console.log("proof", proof);
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
    .approve(
      "0x39456a87E4a7F1B25e0b5E58f61ba9B41072D4Cd",
      "10000000000000000000000000"
    )
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
export const reFund = async (frId) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return frContract.methods.refund(frId).send({
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
