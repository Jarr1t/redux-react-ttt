import React from 'react'
import { useSelector} from 'react-redux'
import Square from "./Square"

function Board(){
  const squares = useSelector(state => state.ttt.board)
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} index={i}/>
      ))}
    </div>
  )
};

export default Board