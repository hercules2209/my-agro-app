import React from "react";
import CartItemControl from "./CartItemControl";
import { IoMdArrowRoundBack } from "react-icons/io";

const SideBar = (props) => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const overlayClass = props.isOpen ? "market-overlay on" : "market-overlay off";

  return (
    <div>
      <div className={overlayClass}></div>
      <div className={sidebarClass}>
        <div className="side-bar-header">
          <div className="my-cart">
            <IoMdArrowRoundBack
              className="back-arrow"
              onClick={props.toggleSideBar}
            />
            <h1>My Cart</h1>
          </div>
          <button className="checkout">
            <a href="/comingsoon">Checkout</a>
          </button>
        </div>
        {Array.isArray(props.cartItems) &&
          props.cartItems.map((item, index) => (
            <CartItemControl
              key={index}
              increase={props.increase}
              decrease={props.decrease}
              quantity={item.quantity}
              title={item.title}
              image={item.image}
            />
          ))}
      </div>
    </div>
  );
};

export default SideBar;
