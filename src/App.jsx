import { useState } from 'react';
import './App.css';

const height = 4;
const width = 4;

function App() {
  const [board, setBoard] = useState(() =>
    Array(height)
      .fill(null)
      .map(() => Array(width).fill(false))
  );

  function handleClick(i, j) {
    const newBoard = [...board];
    newBoard[i] = [...newBoard[i]];
    newBoard[i][j] = !newBoard[i][j];

    setBoard(newBoard);
  }

  function rotate(board) {
    const rotatedBoard = Array(board[0].length)
      .fill(null)
      .map(() => Array(board.length).fill(null))

    board.forEach((row, i) => {
      row.forEach((_, j) => {
        rotatedBoard[j][board.length - i - 1] = board[i][j];
      })
    })

    setBoard(rotatedBoard);
  }

  return (
    <>
      <h1>Rotate the Field</h1>
      <div className="container">
        {board.map((row, i) => (
          <div className="row">
            {row.map((cell, j) => (
              <div 
                className={`cell ${cell === true ? "marked" : ""}`}
                onClick={() => handleClick(i, j)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <button 
        onClick={() => rotate(board)}>
        Rotate
      </button>
    </>
  )
}

export default App;
