import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    userInfo:[],
}

export const amazonSlice = createSlice({
    name:"amazon",
    initialState,
    reducers:{
        addTocart:(state, action)=>{
            state.products = action.payload
        }
    }
})

export const { addTocart} = amazonSlice.actions;
export default amazonSlice.reducer;