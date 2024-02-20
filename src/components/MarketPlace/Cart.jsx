//Cart.jsx
import React, { useState, useEffect } from 'react';
import './MarketPlace.css';
import variant from './cart-variant.svg';
import SideBar from './SideBar';
function Cart(props) {

  const [cartState,setCartState] = useState(props.cartItems)
  const [cartButtonContent, setCartButton] = useState("View Cart")
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    setCartButton(sidebarOpen ? "View Cart" : "Hide Cart")
  };
  console.log(props.cartItem);
  return (
    <div>
      <div className='cart'>
        <button onClick={handleViewSidebar}>{cartButtonContent}</button>
        <img src={variant} alt="cart" />
      </div>
      <SideBar cartItems={props.cartItems} isOpen={sidebarOpen} toggleSideBar={handleViewSidebar} increase={props.increase} decrease={props.decrease}/>
     </div> 
  );
}

export default Cart;