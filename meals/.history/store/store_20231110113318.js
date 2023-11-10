import { configureStore } from "@reduxjs/toolkit";

 const store = configureStore({
    reducer : {
        meal : mealSlice,
    }
})
export default