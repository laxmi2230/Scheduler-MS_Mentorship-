import React from 'react';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Home  from './Components/Home';
import Signup from './Components/Signup/Signup';
import Registration from './Components/Registration/Registration';
import Classinfo from './Components/ClassInfo';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route path="/Signup" component={Signup}  />
           <Route path="/Registration" component={Registration}/>
          <Route path="/Classinfo" exact component={Classinfo}/>
          <Route path="/classinfo/:subjectcode" component={Classinfo}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
