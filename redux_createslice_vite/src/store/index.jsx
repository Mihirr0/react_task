import {configureStore} from '@reduxjs/toolkit';
import Slices from "./slices"

const store= configureStore({
    reducer:{
        learn: Slices
        
    }
})
export default store;