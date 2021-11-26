import React from 'react';
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import { useState, useEffect } from 'react';


import Footer from './components/Footer'

import Main from './components/Main';

import Home from "./pages/Home";
import About from "./pages/About"; 

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path ="/" exact element={<Home/>}/>
          <Route path="/a-propos" exact element={<About/>}/>
      </Routes>
    </Router>
    
    <Main></Main>
    <Footer></Footer>
    </>
  );
}

export default App;

