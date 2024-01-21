import React, { useState, useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
function CartItemControl(props){
    const [quantity,setQuantity] = useState(props.quantity);
    function increaseQuantity(){
        setQuantity(quantity+1);
        props.increase(props.title);
    };
    function decreaseQuantity(){
        setQuantity(quantity-1);
        props.decrease(props.title);
    };
    if(quantity>0){
        return <div className='item'>
        <div className='item-identifier'><img src={props.image} alt="" /><h2>{props.title}</h2></div>
        <div className="quantity-dial"><button onClick={decreaseQuantity}><FaMinus /></button><p>{quantity}</p><button onClick={increaseQuantity}><FaPlus /></button></div>
    </div>
    }
    else{
        return;
    }
    
}

export default CartItemControl