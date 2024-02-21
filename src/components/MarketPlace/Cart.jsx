import React, { useState } from 'react';
import './MarketPlace.css';
import variant from './cart-variant.svg';
import SideBar from './SideBar';

function Cart(props) {
  const { cartItems, tools, seeds, fertilizers } = props;
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [cartButtonContent, setCartButton] = useState("View Cart");

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    setCartButton(sidebarOpen ? "View Cart" : "Hide Cart");
  };

  return (
    <div>
      <div className='cart'>
        <button onClick={handleViewSidebar}>{cartButtonContent}</button>
        <img src={variant} alt="cart" />
      </div>
      <SideBar
        cartItems={cartItems}
        
        tools={tools}
        seeds={seeds}
        fertilizers={fertilizers}
        isOpen={sidebarOpen}
        toggleSideBar={handleViewSidebar}
        removeItemFromCart={props.removeItemFromCart} 
        addItem={props.addItem}
      />
    </div>
  );
}

export default Cart;
