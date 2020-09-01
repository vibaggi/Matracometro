import React from 'react';
import './App.scss';
import Navbar from './Navbar/Navbar'
import { Content } from 'carbon-components-react/lib/components/UIShell';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Analyzer from './Analyzer/Analyzer.js'
import About from './About/About.js'


function App() {


  return (
    <div className="App">
      <Navbar />
      <Content>
        <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Analyzer/>
              </Route>
            </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default App;
