import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; 
import About from "./pages/About"; 

const App = () => {
  return (
    
 <BrowserRouter>
<Routes>
   <Route path ="/" exact  component ={Home}/>
   <Route path ="/a-propos" exact component ={About} />
   <Route component ={NotFound}/>
</Routes>
 </BrowserRouter>

  );
}

export default App;

