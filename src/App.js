import React  from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from './componets/Home';
import Search from './componets/Search';

function App() {
  return (
   <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </Router>
   </>
  );
}

export default App;
