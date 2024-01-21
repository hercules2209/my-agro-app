import React, { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";

function ItemEnhanced(props){
    return <div className='item-enhanced'>
        <div className='left'>
        <IoIosClose className='close-button' onClick={()=>{props.close({})}}/>
        <img className='item-image' src={props.image} alt={props.title} />
        </div>
        <div className='right'>
            <div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            </div>
            <div className='button-group'>
                <button className='add-cart' onClick={()=>props.addItem(props.title,props.image)}>Add to Cart</button>
                <button className="buy-now">Buy Now</button>
            </div>
        </div>
    </div>
}

export default ItemEnhanced;