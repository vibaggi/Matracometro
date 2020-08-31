import React from 'react';
import './App.scss';
import Navbar from './Navbar/Navbar'
import Analyzer from './Analyzer/Analyzer'
import { Content } from 'carbon-components-react/lib/components/UIShell';

function App() {
  
  
  return (
    <div className="App">
      <Navbar/>
      <Content>
        <Analyzer/>
      </Content>
      
    </div>
    // React.createElement('div', null, React.createElement('h1', null, 'OLA'))
  );
}

export default App;
