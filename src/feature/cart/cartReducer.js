import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";  
import axios from 'axios'

 
const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    amount: 1, 
    total: 0, 
    isLoading: false
}

export const getCartItems = createAsyncThunk("cart/getItems", async(_, thunkApi) => {
 try {
  let resp = await axios.get(url) 
  return resp.data
 }catch(err) { 
  return thunkApi.rejectWithValue(err.response)
 }
})

const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
       removeItem: (state, action) => {
        const itemId = action.payload 
        state.cartItems = state.cartItems.filter((item) => item.id !== itemId) 
       },  

       clearCart: (state) => {
       state.cartItems = []
       }, 

       increaseItem: (state, {payload}) => {
        let itemId = payload.id
        let cartItem = state.cartItems.find((item) => item.id === itemId)  
        cartItem.amount++  
       }, 

       decreaseItem : (state, {payload}) => {
        let itemId = payload.id
        let cartItem = state.cartItems.find((item) => item.id == itemId) 
        cartItem.amount--
       }, 

       calculateTotals: (state) => { 
        let amount = 0
        let total = 0 
        
        state.cartItems.forEach((item) => {
            amount += item.amount 
            total += item.amount * item.price 
        }) 
        state.amount = amount 
        state.total = total
       }  
    },
 
    extraReducers: (builder) => {
        builder 
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        }) 
        builder.addCase(getCartItems.fulfilled, (state, action) => { 
            state.cartItems = action.payload 
            state.isLoading = false
        }) 
        builder.addCase(getCartItems.rejected, (state) => {
            state.cartItems = [] || null
            state.isLoading = false
        })
    }
})  



export let { removeItem, clearCart, increaseItem, decreaseItem, calculateTotals} = cartSlice.actions

export default cartSlice.reducer