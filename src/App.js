import React from 'react';
import './App.css';
import Board from './components/Board'

function App() {
  return (
    <>
      <h1 className="title">MEMORY GAME</h1>
      <div className="game">
        <Board />
      </div>
    </>
  );
}

export default App;
