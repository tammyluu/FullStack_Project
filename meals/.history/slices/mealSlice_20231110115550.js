import { createSlice } from "@reduxjs/toolkit";


const mealSlice = createSlice({
    title: 'meals',
    initialState : {
        meals : meals,
        mealsOfCategory:[],
        selectedCategoryId: null,
        selectedMeal: null
    }

})
export default mealSlice.reducer