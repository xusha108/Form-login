import React from 'react';
import Login from './Components/Login';
import Contacts from './Components/Contacts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component = {Login} />      
        <Route path='/contacts' component = {Contacts} />     
      </Switch>
    </Router>
  );
}

export default App;
