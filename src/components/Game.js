import Board from "./Board";
import { useSelector } from 'react-redux'

function Game(){
  const currentPlayer = useSelector((state) => state.ttt.player)
  const winner = useSelector((state) => state.ttt.winner)
  const tie = useSelector((state) => state.ttt.tie)

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <h1>{winner ? currentPlayer + " won!" : tie ? "It's a tie!" : "It is " + currentPlayer + "'s turn"}</h1>
      <Board />
    </>
  );
};

export default Game;