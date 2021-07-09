import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/services' exact component={Services}></Route>
          <Route path='/products' exact component={Products}></Route>
          <Route path='/sign-up' exact component={SignUp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
