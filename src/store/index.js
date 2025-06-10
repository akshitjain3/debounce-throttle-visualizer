import { configureStore } from "@reduxjs/toolkit";
import gunReducer from './slices/gunSlice'
const store = configureStore({
    reducer: {
        gun: gunReducer
    }
});

export default store;