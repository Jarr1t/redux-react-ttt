import { createSlice } from '@reduxjs/toolkit'

const tttSlice = createSlice({
    name: 'ttt',
    initialState: {
        player: "X",
        winner: false,
        tie: false,
        board: [null,null,null,null,null,null,null,null,null]
    },
    reducers: {
        changePlayer: (state, action) => {
            if(action.payload === null && state.winner === false){
            state.player === "X" ? state.player = "O" : state.player = "X"
            } else {
               return 
            }
        },
        updateBoard: (state, action) => {
            state.board = action.payload
        },
        win: (state, action) => {
            state.winner = action.payload
        },
        tie: (state, action) => {
            state.tie = action.payload
        }
    }
})

export const { changePlayer, win, tie, updateBoard } = tttSlice.actions
export default tttSlice.reducer