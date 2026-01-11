import './App.css'

import { useState,useEffect } from 'react';
import { Contract_Adress,abi} from './contract/contract_details';
import {ethers} from "ethers"

function App(){
  const [account,setAccount]=useState(",");
  const [contract,setContract]=useState(null);
  const [depositAmount,setDepositAmount]=useState("");
  const [queryAddress,setQueryAddress]=useState("");
  const [userBalance,setUserBalance]=useState("");
  const [contractBalance,setContractBalance]=useState("");

  async function connect() {
    const provider=new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccount",[]);
    const singer= await provider.getSinger()

    const account=await window.ethereum.request({
      method:"eth_requestAccounts"
    });

    const ledger=new ethers.Contract(Contract_Adress,abi,singer);
    setAccount(await singer.getAddress());
    setContract(ledger);  
    await provider.wait();
    alert("connected");
  }

  async function deposite() {
    if(!contract) return alert("bhai wallet to connect kar le");

    const tx=await contract.deposite({
      value:ether.parseEther(depositAmount),
    });
    await tx.wait();
    alert("success");
  }
  async function getUserBalance() {
    if(!contract) return alert("wallet");
    const bal=await contract.userBalance(queryAddress);
    setUserBalance(ether.formatEther(bal));


  }
  async function getContractBalance() {
    if(!contract) return alert("wallet");
    const bal=await contract.contractBalance();

    setContractBalance(ethers.formatEther(bal));
    
  }

  return(
    <div>
      <li>
        <h1>Dapp Ledger</h1>
      </li>
      <li>
        <button onClick={connect}>connect wallet</button>
        <p>{account && `Connecte:${account}`}</p>
      </li>
      <li>
        <h1>deposit in acc</h1>
        <input placeholder='amount in eth' value={depositAmount} onChange={(e)=>setDepositAmount(e.target.value)}/>
        <button onClick={deposite}>deposite</button>
      </li>
      <li>
        <h1>check userBalance</h1>
        <input placeholder='account adress' value={queryAddress} onChange={(e)=>setQueryAddress(e.target.value)}/>
        <button onClick={getUserBalance}>check bal</button>
        <p>{userBalance && `balance:${userBalance} eth`}</p>
      </li>
      <li>
        <h1> cont bal</h1>
        <button onClick={getContractBalance}>ledger bal</button>
        <p>{contractBalance && `contract bal ${contractBalance} eth`}</p>
      </li>
    </div>
  );

}
export default App;
