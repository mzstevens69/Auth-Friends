import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Login} from './components/Login';

import PrivateRoute from './components/PrivateRoute'
import './App.css';
import { Dash } from './components/Dash';

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Friends</h1>
      
        <span>
          <Link to='/login'>Log In</Link>
        </span>
        <span>
          <Link to='/dash'>Friends</Link>
        </span>
      
      <Switch>
        <PrivateRoute exact path='/dash' 
        component={Dash} />
        <Route  path='/login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
