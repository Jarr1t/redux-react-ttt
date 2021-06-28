import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePlayer, win, tie, updateBoard } from '../features/tttSlice'

function Square(props){
    const dispatch = useDispatch()
    const storeWinner = useSelector((state) => state.ttt.winner)
    const storeTie = useSelector((state) => state.ttt.tie)
    const player = useSelector((state) => state.ttt.player)
    let board = useSelector((state) => state.ttt.board)

    function placement(){
        let newBoard = [...board]
        if(!storeWinner && !storeTie){
            if(newBoard[props.index] === null){
                newBoard[props.index] = player
                dispatch(updateBoard(newBoard))
            }
        }
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
        lines.forEach(play => {
        let winner = true
            play.forEach(inner => {
                if(newBoard[inner] !== player){
                    winner = false
                }
            })
            if(winner){
                dispatch(win(true))
            }
        })
        if(newBoard.find(ele => ele === null) === undefined){
            dispatch(tie(true))
        }
        if(!storeWinner){
            dispatch(changePlayer(props.value))
        }
    }
    
    const style = props.value ? `squares ${props.value}` : `squares`
    return (
        <button className={style} onClick={placement}>
            {props.value}
        </button>
    )
}

export default Square