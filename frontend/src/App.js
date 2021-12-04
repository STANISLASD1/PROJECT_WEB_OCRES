import React from 'react';
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Controle from './pages/Controle';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
          <Route path ="/" exact element={<Home/>}/>
          <Route path ="/dashboard" exact element={<About/>}/>
          <Route path ="/controle" exact element={<Controle/>}/>
      </Routes>
    </Router>
    
    
    </>

  
  );
}

export default App;

