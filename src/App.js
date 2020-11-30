import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/pages/Main';
import Test from './components/pages/Test'

function App() {
  return (
    <>
      <Router>
        <Route path='/' exact component={Home} />
        <Navbar />
        <Switch>
            <Route path='/main' component={Main} />
            <Route path='/test' component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
