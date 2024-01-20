import React from "react";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const overlayClass = props.isOpen ? "market-overlay on" : "market-overlay off"
  return (
    <div>
        <div className={overlayClass}></div>
    <div className={sidebarClass} >
        {
            props.cartItems.map(
                (item,index)=>{
                    return <div className="item">
                        <h2>{item.title}</h2>
                        <div className="quantity-dial"><button>-</button><p>{item.quantity}</p><button>+</button></div>
                    </div>
                }
            )
        }
    </div>
    </div>
  );
};
export default SideBar;