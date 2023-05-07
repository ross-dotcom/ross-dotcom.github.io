import Board from './Board';
import Info from "./Info";
import "./App.css";
import { useState } from 'react';

function App() {

	// Creating a reset state which indicates whether the game should be reset or not.
	const [reset, setReset] = useState(false);

	// Creating a winner state which indicates the current winner.
	const [winner, setWinner] = useState('');

	// Sets the reset property to true which starts the chain reaction of resetting the board.
	const resetBoard = () => {
		setReset(true);
	}

	return (
		<div className="App">
      <h1 className="nameOf">
        TIC TAC TOE
      </h1>
			{/* Shrinks the popup when there is no winner */}
			<div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
				{/* Display the current winner */}
				<div className='winner-text'>{winner}</div>
				{/* Button used to reset the board */}
				<button onClick={() => resetBoard()}>
					Reset Board
				</button>
			</div>
			{/* Custom made board component comprising of the tic-tac-toe board */}
			<Board reset={reset} setReset={setReset} winner={winner}
				setWinner={setWinner} />
			<Info />
		</div>
	);
}

export default App;
