import { createSlice } from '@reduxjs/toolkit';


const sumSlice = createSlice({

    name: 'sum',
    initialState: {num1 : 0, num2:0, sum: 0},
    reducers: {
        NUM_1: (state, action) => {
            let { payload } = action
            state.num1 = payload
    },
NUM_2: (state, action) => {
        let { payload } = action
        state.num2 = payload
},
sum: (state) => {
  state.sum = parseInt(state.num1) + parseInt(state.num2)
}

    }
    })


const {actions,reducer}=sumSlice;
export const {NUM_1,NUM_2,sum}=actions;
export default reducer;
