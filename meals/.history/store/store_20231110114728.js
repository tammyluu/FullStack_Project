import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";
import categorySlice from "./categorySlice";
 const store = configureStore({
    reducer : {
        meals : mealSlice,
        categoris : categorySlice
    }
})
export default store