import { useEffect } from 'react'
import './App.css' 
import Navbar from './components/Navbar' 
import CartContainer from './components/cartContainer' 
import { calculateTotals, getCartItems   } from './feature/cart/cartReducer' 
import { useDispatch, useSelector } from 'react-redux' 



function App() {
  
const {cartItems, isLoading} = useSelector((state) => state.cart) 
let dispatch = useDispatch()

 useEffect(() => {
  dispatch(calculateTotals()) 
 }, [cartItems])
  
 useEffect(() => {
  dispatch(getCartItems())
 }, [])

 if(isLoading) {
  return (
    <div>
      <h1>loading</h1>
    </div>
  )
 }

  return (
   <nav>
    <Navbar/> 
    <CartContainer/>
   </nav>
  )
}

export default App
