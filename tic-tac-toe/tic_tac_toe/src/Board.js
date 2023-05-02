import './Board.css';
import React from 'react';
import Square from './Square';

function Board() {
  const squares = [];
  const handleClick = () => {};
  
  for (let i=0; i<9; i++){
    squares.push(<Square key={i} value={i} onClick={handleClick} />);
  }
  
  return (
    <div className="board" onClick={handleClick}>
      {/* TODO: Add squares to the board */}
      {squares}
    </div>
  );
}

export default Board;