import { configureStore } from "@reduxjs/toolkit";
import {mea}
 const store = configureStore({
    reducer : {
        meal : mealSlice,
    }
})
export default store