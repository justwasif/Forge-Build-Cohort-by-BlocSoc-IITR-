import './App.css'

import { useState } from 'react';
import { Contract_Adress, abi } from './contract/contract_details';
import { ethers } from "ethers"

function App(){
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [queryAddress, setQueryAddress] = useState("");
  const [userBalance, setUserBalance] = useState("");
  const [contractBalance, setContractBalance] = useState("");

  async function connect() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const ledger = new ethers.Contract(Contract_Adress, abi, signer);
    setAccount(await signer.getAddress());
    setContract(ledger);  

  }

  async function deposit() {
    if(!contract) return alert("bhai wallet to connect kar le");

    const tx = await contract.deposit({
      value: ethers.parseEther(depositAmount),
    });
    await tx.wait();
    alert("success");
  }

  async function getUserBalance() {
    if(!contract) return alert("wallet");
    const bal = await contract.userBalance(queryAddress);
    setUserBalance(ethers.formatEther(bal));
  }

  async function getContractBalance() {
    if(!contract) return alert("wallet");
    const bal = await contract.contractBalance();
    setContractBalance(ethers.formatEther(bal));
  }

  return (
  <div className="min-h-screen  flex items-center justify-center">
    <div className="border rounded-lg ">

      <h1 className="text-3xl  text-center  ">
        DApp Ledger
      </h1>

      
      <div className="border rounded-lg p-4 mb-4">
        <button
          onClick={connect}
          className="w-full bg-blue-500 text-white "
        >
          Connect Wallet
        </button>
        {account && (
          <p className="mt-2 text-sm  break-all text-center">
            Connected: {account}
          </p>
        )}
      </div>

  
      <div className="border rounded-lg p-4 mb-4">
        <h3 className=" text-center">enter deposite amount eth</h3>
        <input
          className="w-full border  "
          placeholder="eth"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <button
          onClick={deposit}
          className="w-full bg-green-500 text-white "
        >
          Deposit
        </button>
      </div>

      
      <div className="border rounded-lg ">
        <h3 className=" text-center">Check User Balance</h3>
        <input
          className="w-full border  rounded "
          placeholder="account address"
          value={queryAddress}
          onChange={(e) => setQueryAddress(e.target.value)}
        />
        <button
          onClick={getUserBalance}
          className="w-full bg-purple-500  text-white "
        >
          Check Balance
        </button>
        {userBalance && (
          <p className=" text-center">
            Balance: {userBalance} ETH
          </p>
        )}
      </div>

    
      <div className="border rounded-lg ">
        <h3 className=" text-center">Contract Balance</h3>
        <button
          onClick={getContractBalance}
          className="w-full bg-orange-500  text-white "
        >
          Get Ledger Balance
        </button>
        {contractBalance && (
          <p className="  text-center">
            Contract Balance: {contractBalance} ETH
          </p>
        )}
      </div>

    </div>
  </div>
);


}
export default App;