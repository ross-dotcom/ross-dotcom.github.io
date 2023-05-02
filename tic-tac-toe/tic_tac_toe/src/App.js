import './App.css';
import Square from './Square';
import Board from './Board';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          TIC TAC TOE
        </h1>
        <Square />
        <Board />
        <Game />
      </header>
    </div>
  );
}

export default App;
