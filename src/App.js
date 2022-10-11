
import React from "react";
import { Brand,CTA,Navbar } from "./Components";
import {Features,Blog,Footer,Header,Possibility } from "./Containers";





const App = ()=>{
  return (
   <div className="App">
    <div className="gradient__bg">
    <Navbar/>
    <Header/>
    </div>
    <Brand/>
    {/* <WhatGPT3/> */}
    <Features/>
    <Possibility/>
    <CTA/>
    <Blog/>
    <Footer/>
   </div>
  )
}

export default App;
