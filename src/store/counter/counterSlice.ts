import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementBy: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
});

export default counterSlice.reducer
export const { increment, decrement, incrementBy} = counterSlice.actions