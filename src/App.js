import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from './Components/Home';
import Signup from './Components/Signup/Signup';
import Registration from './Components/Registration/Registration';
import Classinfo from './Components/ClassInfo';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route path="/Signup" element={<Signup/>}  />
           <Route path="/Registration" element={<Registration/>}/>
          <Route path="/Classinfo" exact element={<Classinfo/>}/>
          <Route path="/classinfo/:subjectcode" element={<Classinfo/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
