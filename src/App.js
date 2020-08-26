import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import HeaderBootstrap from './HeaderBootstrap';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* header 
            image on the left hand side
            menu buttons on the right
      */}
          {/* project previews
            hover ability, maybe like how youtube works
      */}
          {/* brief description about me */}

          {/* contact form at the bottom */}
          <Route path='/aboutme'>
            <HeaderBootstrap />
            <AboutMe />

          </Route>


          <Route path='/projects'>
            <HeaderBootstrap />


          </Route>
          <Route path='/Resume'>
            <HeaderBootstrap />


          </Route>
          <Route path='/Contact'>
            <HeaderBootstrap />


          </Route>
          <Route path='/'>
            <HeaderBootstrap />
            <HomeScreen />

          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
