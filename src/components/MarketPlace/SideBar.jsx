import React, { useState } from "react";
import CartItemControl from "./CartItemControl";
const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const overlayClass = props.isOpen ? "market-overlay on" : "market-overlay off"
  return (
    <div>
        <div className={overlayClass}></div>
        
    <div className={sidebarClass} >
    <div class="side-bar-header"><h1>My Cart</h1><button className="checkout">Checkout</button></div>
        {
            props.cartItems.map(
                (item,index)=>{
                    return <CartItemControl increase={props.increase} decrease={props.decrease} quantity={item.quantity} title={item.title} image={item.image}/>
                }
            )
        }
    </div>
    </div>
  );
};
export default SideBar;