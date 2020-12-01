import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Event from './components/pages/Event';
import Test from './components/pages/Test'
import VR from './components/pages/Vr'
import Art from './components/pages/Art'


function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/vr' component={VR} />
            <Route path='/event' component={Event} />
            <Route path='/test' component={Test} />
            <Route path='/art' component={Art} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
