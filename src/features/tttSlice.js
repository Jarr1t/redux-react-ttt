import { createSlice } from '@reduxjs/toolkit'

const tttSlice = createSlice({
    name: 'ttt',
    initialState: {
        board: [null,null,null,null,null,null,null,null,null],
        player: "X",
        winner: false,
        tie: false
    },
    reducers: {
        playerMove: (state, action) => {
            if(state.board[action.payload] === null){
            state.board[action.payload] = state.player
            }
        },
        changePlayer: (state, action) => {
            if(state.board[action.payload] !== null){
            state.player === "X" ? state.player = "O" : state.player = "X"
            } else {
               return 
            }
        },
        win: (state, action) => {
            state.winner = action.payload
        },
        tie: (state, action) => {
            state.tie = action.payload
        }
    }
})

export const { playerMove, changePlayer, win, tie } = tttSlice.actions
export default tttSlice.reducer