import Navbar from './Components/Navbar';
import './App.css';
import TextArea from './Components/TextArea';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import React from "react";
import {  Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
function App() {
  // const s ="light"
  const [mode1,setmode]=useState("light");
  const [alert,setalert]=useState(null);
  const showalert=(msg,Type)=>{
    setalert({
      msg:msg,
      Type:Type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const toggle=()=>{
    if(mode1 === "light"){
      // s = "dark";
      setmode("dark");
      document.body.style.backgroundColor="black";
      showalert("Dark mode is set","success")
    }
    else{
      // s = "light";
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("Light mode is set","success")
    }
  }
  
  return (
   <>
   <Router>
  <Navbar t="TextModify" h="Home" a="About" mode={mode1}   toggle={toggle}/>
  <Alert alert={alert}/>
  < div className="container my-3">
 
  <Routes>
  <Route path='/' element={<TextArea heading="Enter the Text for Analysis" mode={mode1} showalert={showalert}/>}/>
  <Route path="/about" element={<About  mode={mode1}/>}/>
          
  </Routes>
  
  
  </div> 
  </Router>
   </>
  );
}

export default App;
