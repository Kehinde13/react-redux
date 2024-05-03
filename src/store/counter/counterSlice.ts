import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

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
        },
    },
    // Add the asynchronous functions to the reducers
    extraReducers: (builder) => {
        builder
        .addCase(incrementAsync.pending, () => { //add cases for every instance
            console.log("incrementAsyncPending");
        })
        .addCase(
            incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
                state.value += action.payload;
            }
        )
    }
});

//How to handle Asynchronous actions with redux
export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount: number) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return amount
    }
)


// export the reducer function from the slice file to use in the store configuration.
export default counterSlice.reducer

// export the action creators from the slice file to use in the components.
export const { increment, decrement, incrementBy} = counterSlice.actions