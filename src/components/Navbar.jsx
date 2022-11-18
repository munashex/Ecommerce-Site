import React from 'react' 
import '../App.css'
import {FaShoppingCart} from 'react-icons/fa' 
import { useSelector } from 'react-redux'


function Navbar() { 
    
    let {amount} = useSelector((state) => state.cart) 

  return ( 
  <> 
    <nav className="nav"> 
        <div className="nav_items">
            <h3>Munashe store</h3>
            <span>
                <FaShoppingCart size={28} color="white"/> 
                <code>{amount}</code>
            </span>
        </div>
    </nav>
  </>
  )
}

export default Navbar