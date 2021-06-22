import { React } from 'react'
import { useDispatch } from 'react-redux'
import { playerMove, changePlayer, win, tie } from '../features/tttSlice'
import store from '../app/store'

function Square(props){
    const dispatch = useDispatch()

    function placement(){
        if(!store.getState().ttt.winner && !store.getState().ttt.tie){
          dispatch(playerMove(props.index))  
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
            const player = store.getState().ttt.player
            let winner = true
            play.forEach(inner => {
                if(store.getState().ttt.board[inner] !== player){
                    winner = false
                }
            })
            if(winner){
                dispatch(win(true))
            }
            })
            if(store.getState().ttt.board.find(ele => ele === null) === undefined){
                dispatch(tie(true))
            }
            if(!store.getState().ttt.winner){
                dispatch(changePlayer(props.index))
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