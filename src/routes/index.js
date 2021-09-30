// Dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/createUser" exact>
          <CreateUser />
        </Route>
      </Switch>
    </Router>
  );
}
