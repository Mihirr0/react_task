import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from '../slice/Slice';

const store = configureStore({
    reducer: calculateReducer
});

export default store;