import Web3 from "web3";
import SahayogiTokenBuild from "./abi/SahayogiToken.json"
import FundRaisingBuild from "./abi/FundRaising.json";


let frContract;
let sytContract;
let selectedAccount;
let isInitialized = false;

export const getBlockchain = async (setAccountAddress) => {
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    provider
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        selectedAccount = accounts[0];
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
      "0xE29F9433e564c865CAC3Ff9ceAE120A63Dcc3bA0"
    );
    frContract = new web3.eth.Contract(
      FundRaisingBuild.abi,
      // FundRaisingBuild.networks[networkId].address
      "0xE9540d02B5f711913Ab11E2614E5A87e7E56189A"
    );
    isInitialized = true;
  }
};
export const getOwnBalance = () => {
  return sytContract.methods.balanceOf(selectedAccount).call();
};

export const mintToken = async (mintAddress, mintAmount) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return sytContract.methods.mint(mintAddress, mintAmount).send({
    from: selectedAccount,
  });
};

export const approve = async ()=>{
    if (!isInitialized) {
        await getBlockchain();
      }
      return sytContract.methods
      .approve(selectedAccount,10000000)
      .send({
        from: selectedAccount,
      });
}
export const transferFrom = async (to,amount)=>{
  if (!isInitialized) {
      await getBlockchain();
    }
    return sytContract.methods
    .transfer(to, amount)
    .send({
      from: selectedAccount,
    });
}
export const doDonate = async (id,amount) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return frContract.methods
    .donate(id,amount)
    .send({
      from: selectedAccount,
    });
};
export const getRaiseFunds = async (id) => {
  if (!isInitialized) {
    await getBlockchain();
  }
  return frContract.methods
    .raiseFunds(id)
    .send({
      from: selectedAccount,
    });
};
