import { configureStore } from "@reduxjs/toolkit";

ex const store = configureStore({
    reducer : {
        meal : mealSlice,
    }
})