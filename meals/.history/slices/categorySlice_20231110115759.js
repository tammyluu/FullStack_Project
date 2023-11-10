import { createSlice } from "@reduxjs/toolkit";


const categorySlice = createSlice({
    title :"category",
    initialState: {
        categories : ,
        selectedCategory : null
        

    },
    reducers: {

       setSelectedCategory : (state,action) => {
           state.selectedCategory= action.payload
       } 
   
   },
})
export default categorySlice.reducer