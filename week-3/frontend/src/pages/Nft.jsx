import { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "../../contract";






function Nft() {
  const [account, setAccount] = useState(null);
  const [mintingDog1, setMintingDog1] = useState(false);
  const [mintingDog2, setMintingDog2] = useState(false);

  
  const DOG1_URI ="ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json";
  const DOG2_URI = "ipfs://QmNZydxUGvWBTWPvswcYSyg9HSXPoYDDDbd5E8i8N65LAp";

  const DOG1_IMG = "https://ipfs.io/ipfs/QmSsYRx3LpDAb1GZQm7zZ1AuHZjfbPkD6J7s9r41xu1mf8?filename=pug.png";
  const DOG2_IMG = "https://ipfs.io/ipfs/QmPwjq6xjQ4eC32hEdyuiB1Dop5fm833FQxpmUbpsZLjV2";

  async function connect() {
    

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  }

  async function getContract() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  }

  
  async function mintDog1() {
    try {
      setMintingDog1(true);
      const contract = await getContract();
      const tx = await contract.mintNft(DOG1_URI);
      await tx.wait();
      
    } catch (err) {
      console.error(err);
    } finally {
      setMintingDog1(false);
    }
  }

  
  async function mintDog2() {
    try {
      setMintingDog2(true);
      const contract = await getContract();
      const tx = await contract.mintNft(DOG2_URI);
      await tx.wait();
      
    } catch (err) {
      console.error(err);
    } finally {
      setMintingDog2(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-6">
    
    <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-wide">
      NFT Mint
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-3xl">

      
      <div>
        
        

        {!mintingDog1 ? (
          <button
          
            onClick={mintDog1}
            className="bg-blue-600  rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition-all"
          >
            Mint DOG
          </button>
        ) : (
          <button
            disabled
            className="bg-blue-600  rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition-all"
          >
            Minting...
          </button>
        )}
      </div>

  
      <div>
        
      

        {!mintingDog2 ? (
          <button
            
            onClick={mintDog2}
            className="bg-blue-600  rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition-all"
          >
            Mint CAT
          </button>
        ) : (
          <button
            disabled
            className="bg-blue-600  rounded-2xl p-8 text-center shadow-xl hover:-translate-y-2 transition-all"
          >
            Minting...
          </button>
        )}
      </div>

    </div>
  </div>

  );
}

export default Nft;
