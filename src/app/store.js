import {configureStore} from '@reduxjs/toolkit'  
import cartReducer from '../feature/cart/cartReducer'

const store = configureStore({
    reducer: {
      cart: cartReducer
    }
})

export default store