import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'

//connect states using store so that they can be accessible across the entire application
export const store = configureStore({
    reducer: {
      counter: counterReducer
    },
})


//export types from redux
export type rootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch