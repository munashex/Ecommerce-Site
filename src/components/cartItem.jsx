import React from 'react' 
import { useDispatch } from 'react-redux'
import '../App.css' 
import {removeItem, increaseItem, decreaseItem } from '../feature/cart/cartReducer' 




function CartItem({id, title, price, img, amount}) {  

  const dispatch = useDispatch() 

  return ( 

   <div style={{marginBottom: 35}}>
     <img src={img} alt={price} className="img"/> 

      <div className="inner_items">
      <code>{title}</code> 
      <code>${price}</code>  
      <button onClick={() => dispatch(removeItem(id))}>remove</button> 
       <div style={{marginTop: 10, marginBottom: 10}}> 
       <button 
        onClick={() => dispatch(increaseItem({id}))} 
        >+</button>  
       {amount}
       <button 
        onClick={() => {
          if(amount ===  1) {
            dispatch(removeItem(id))
          } 
          dispatch(decreaseItem({id}))
        }}
        >-</button>
       </div>  
      </div> 
   </div>
  )
}

export default CartItem