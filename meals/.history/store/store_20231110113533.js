import { configureStore } from "@reduxjs/toolkit";
import me
 const store = configureStore({
    reducer : {
        meal : mealSlice,
    }
})
export default store