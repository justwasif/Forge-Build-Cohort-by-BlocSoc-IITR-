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
      Contract_abi.abi,
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
        Contract_abi.abi,
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
    alert("Stored successfully");
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">

      <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">

        <h1 className="text-2xl font-bold text-center text-purple-400">
          My First Web3 App
        </h1>

        {/* Wallet Section */}
        <div className="flex flex-col gap-3">

          <button
            onClick={connet}
            className="bg-purple-600 hover:bg-purple-700 transition py-2 rounded-lg font-semibold"
          >
            {account ? "Connected" : "Connect Wallet"}
          </button>

          {account && (
            <p className="text-xs text-gray-400 break-all text-center">
              {account}
            </p>
          )}

        </div>

        {/* Get Value */}
        <button
          onClick={getValue}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded-lg"
        >
          Get Value
        </button>

        {/* Input + Set */}
        <div className="flex gap-2">

          <input
            onChange={(e) => setinput(e.target.value)}
            placeholder="Enter number"
            className="flex-1 px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button
            onClick={setValue}
            className="bg-green-600 hover:bg-green-700 transition px-4 rounded-lg font-semibold"
          >
            Set
          </button>

        </div>

        {/* Display */}
        <div className="text-center text-lg font-medium text-yellow-400">
          Value: {value || "—"}
        </div>

      </div>

    </div>
  );
}

export default My_first_web3;
