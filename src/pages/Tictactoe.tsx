
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

import { useState } from 'react';
import '../css/stylestictactoe.css';

function Square({ value, onSquareClick }: { value: string | null, onSquareClick: () => void }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}


export default function Board({ xIsNext, squares, onPlay }: { xIsNext: boolean, squares: Array<string | null>, onPlay: (a: Array<string | null>) => void }) {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next: " + (xIsNext ? "x" : "o");
  }



  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nextSquares = squares.slice();
    if (xIsNext) {

      nextSquares[i] = 'x'
    } else {
      nextSquares[i] = 'o'

    }
    onPlay(nextSquares);

  }

  return (
    <>
      <div>winner:{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
function Game() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares: Array<string | null>) {
    // TODO
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className='game'>

      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol></ol>
      </div>
    </div>
  )
}
const root: HTMLElement | null = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <StrictMode>
    <Game />
  </StrictMode>
);