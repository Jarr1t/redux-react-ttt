import { configureStore } from '@reduxjs/toolkit';
import tttReducer from '../features/tttSlice'

export default configureStore({
  reducer: {
    ttt: tttReducer
  }
});
