import { configureStore } from "@reduxjs/toolkit";
import mealSlice from "./mealSlice";
import categorySlice from "./categorySlice";
 const store = configureStore({
    reducer : {
        meal : mealSlice,
        category : categorySlice
    }
})
export default store