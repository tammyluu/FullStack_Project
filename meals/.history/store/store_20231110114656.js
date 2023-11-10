import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";
 const store = configureStore({
    reducer : {
        meal : mealSlice,
        catego
    }
})
export default store