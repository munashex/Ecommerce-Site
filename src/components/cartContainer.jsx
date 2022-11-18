import React from 'react' 
import { useDispatch, useSelector } from 'react-redux' 
import { clearCart } from '../feature/cart/cartReducer'
import CartItem from './cartItem' 
import '../App.css' 

function CartContainer() { 

  const {cartItems, amount, total, isLoading} = useSelector((state) => state.cart)
  
 const dispatch = useDispatch()

if(amount < 1) {
  return (
    <div className="empty_cart"> 
      <h2>Your cart is empty</h2>
    </div>
  )
}

  return (
    <div className="cart_items">
        
        <div className="item_data">
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}/>
          })}
        </div>

        <footer>
          <hr/> 
          <div className="total">
           <code>Total</code> 
           <code>${total.toFixed()}</code>
          </div> 

          <div className="btn_container">
          <button onClick={() => dispatch(clearCart())}>clear cart</button>
          </div>
        </footer>
    </div>
  )
}

export default CartContainer