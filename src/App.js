import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Rank from './Rank/Rank'
import Navbar from './Navbar/Navbar'
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';

function App() {
  let usuarios = [
      {id: '1', nome: 'NADJA', totalMensagens: 5400},
      {id: '2', nome: 'HUMBERTO', totalMensagens: 2800},
      {id: '2', nome: 'LUZAO', totalMensagens: 1600},
      {id: '3', nome: 'BAGGI', totalMensagens: 900},
    ]
  
  return (
    <div className="App">
      <Navbar/>
      <Content>
        <Rank lista={usuarios}/>
        <Button>TESTE CARBON</Button>
      </Content>
      
    </div>
    // React.createElement('div', null, React.createElement('h1', null, 'OLA'))
  );
}

export default App;
