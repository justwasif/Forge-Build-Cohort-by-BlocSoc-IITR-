import { useState, useEffect } from "react";
import { Contract_Adress, Contract_abi } from "../contract/contract_details";
import { ethers } from "ethers";

function My_first_web3() {
  const [contract, setContract] = useState(null);
  const [value, setvalue] = useState("");
  const [input, setinput] = useState("");
  const [account, setaccount] = useState("");

  async function connet() {
    if (!window.ethereum) {
      alert("Install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contr = new ethers.Contract(
      Contract_Adress,
      Contract_abi,
      signer
    );

    setaccount(accounts[0]);
    setContract(contr);
  }

  useEffect(() => {
    async function reconnect() {
      if (!window.ethereum) return;

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length === 0) return;

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contr = new ethers.Contract(
        Contract_Adress,
        Contract_abi,
        signer
      );

      setaccount(accounts[0]);
      setContract(contr);
    }

    reconnect();
  }, []);

  async function getValue() {
    if (!contract) return;
    const val = await contract.get();
    setvalue(val.toString());
  }

  async function setValue() {
    if (!contract) return;
    const tx = await contract.set(input);
    await tx.wait();
    alert("stored");
  }

  return (
    <div>
      <li>
        <h1>my first web 3 app</h1>
      </li>
      <li>
        <button onClick={connet}>connect</button>
      </li>
       
        <button onClick={getValue} >
          get
        </button>
      <li>
        <input
          onChange={(e) => setinput(e.target.value)}
          placeholder="enter any no"
        />
      </li>
      <li>
        <button onClick={setValue} >
          set
        </button>
      </li>
        <p>value is {value}</p>
    </div>
  );
}

export default My_first_web3;
