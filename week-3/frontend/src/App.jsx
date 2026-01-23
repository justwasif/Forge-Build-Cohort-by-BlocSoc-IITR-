import { Route,Routes,BrowserRouter } from "react-router-dom";

// import main from "../../game/src/main"
import Nft from "./pages/Nft"

import { config } from "./component/bwalletButton";
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Header from "./component/Header";



function App(){
  
  const queryClient=new QueryClient();

  
  
  return(
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
         <RainbowKitProvider>
            <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" element={<Nft/>}/>
            </Routes>
          </BrowserRouter>
        </RainbowKitProvider>

      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App;