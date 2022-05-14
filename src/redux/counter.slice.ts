import { createSlice } from "@reduxjs/toolkit";

interface counterState {
    value: number
}

interface gstate {
    counter: {
        value: number
    },
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state: counterState) => {
            state.value += 1;
        },
        decreament: (state: counterState) => {
            state.value -= 1;
        },
        resetCounter: (state: counterState) => {
            state.value = 0;
        }
    }
});

export const {increment, decreament, resetCounter} = counterSlice.actions;

export const selectCount = (state: gstate) => state.counter.value;

export default counterSlice.reducer;
