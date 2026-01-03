import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Home from "./pages//Home"

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>

    </div>

   
    
  );
}


export default App
