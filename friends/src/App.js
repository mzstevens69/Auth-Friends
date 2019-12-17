import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/login'>Log In</Link>
        </li>
        <li>
          <link to='/protected'>Friends</link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute path='/protected' component={Friends}/>
        <Route path='Login' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
