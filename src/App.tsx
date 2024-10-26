import { RotateCcw } from "lucide-react";
import Square from "./Square";
import Player from "./Player";
import { useState } from "react";
import { PlayerType } from "./types";

type Squares = (PlayerType | null)[];

export default function App() {
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  const [winner, setWinner] = useState<PlayerType | null>(null); // 처음엔 null갖고, 그 이후엔 string 갖게 하고 싶음 => 제네릭 사용
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleSquareClick = (i: number) => {
    if (winner) {
      return;
    }

    if (squares[i]) {
      return;
    }

    const newSquares = squares.map((square, index) => {
      if (index === i) {
        return currentPlayer;
      }

      return square;
    });

    const findWinner = calculateWinner(newSquares);

    if (findWinner) {
      setWinner(findWinner);
    } else {
      setCurrentPlayer(currentPlayer === "player1" ? "player2" : "player1");
    }

    setSquares(newSquares);
  };

  const reset = () => {
    setCurrentPlayer("player1");
    setWinner(null);
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="mockup-browser border-base-300 border w-[600px] bg-primary">
        <div className="mockup-browser-toolbar">
          <div className="input">
            <span className="font-bold">Tic Tac Toe</span>
          </div>
        </div>
        <div className="border-base-300 flex flex-col justify-center items-center px-4 py-16 bg-base-100">
          <div className="flex justify-between items-center w-96">
            <Player player="player1"
              isCurrentPlayer={currentPlayer === 'player1'}
              isWinner={winner === 'player1'}/>
            <RotateCcw onClick={reset}/>
            <Player player="player2"
              isCurrentPlayer={currentPlayer === 'player2'}
              isWinner={winner === 'player2'}/>
          </div>
          <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-primary border-4 border-primary w-96 h-96">
            {squares.map((square, i) => {
              return (
                <Square 
                key={i}
                square={square}
                click={() => handleSquareClick(i)} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateWinner(squares: Squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
