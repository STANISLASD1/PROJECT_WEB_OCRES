import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; 
import About from "./pages/About"; 

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/a-propos" element ={<About/>} />
          <Route element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;

