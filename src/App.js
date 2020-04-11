import React from 'react';
import './App.css';
import Board from './components/Board'

function App() {
  return (
    <div className="game">
      <h1 className="title">MEMORY GAME</h1>
      <Board/>
    </div>
  );
}

export default App;
