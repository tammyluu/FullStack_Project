import { createSlice } from "@reduxjs/toolkit";


const mealSlice = createSlice({
    title: 'meals',
    initialState : {
        meals : meals,
        mealsOfCategory:[],
        selectedCategoryId: null,
        selectedMeal: null
    },
    reducers: {

        setSelectCategory: (state, action) => {
            state.selectedCategoryId = action.payload;
        },
        setMealsFromCategory : (state,action) => {
            state.mealsFromCategory= action.payload
        },
        setSelectedMeal : (state,action) => {
            state.selectedMeal= action.payload
        }
    
    },

})
export default mealSlice.reducer