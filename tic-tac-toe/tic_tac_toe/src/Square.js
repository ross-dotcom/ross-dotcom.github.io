import React from 'react';

function Square() {
  function handleClick(){
    console.log('The square was clicked.');
  }
  
  return (
    <button onClick={handleClick}>
      {/* TODO: Add content for the square */}
      X
    </button>
  );
}

export default Square;