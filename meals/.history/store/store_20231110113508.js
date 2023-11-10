import { configureStore } from "@reduxjs/toolkit";
import
 const store = configureStore({
    reducer : {
        meal : mealSlice,
    }
})
export default store