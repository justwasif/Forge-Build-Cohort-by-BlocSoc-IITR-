import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from "./pages//Home"
import My_first_web3 from './component/My_first_web3'

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <My_first_web3/>
      
      <Footer/>

    </div>

   
    
  );
}


export default App
