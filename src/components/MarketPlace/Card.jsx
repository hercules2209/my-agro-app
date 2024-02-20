//Card.jsx
import React, { useState, useEffect } from 'react';
import './MarketPlace.css';
function Card(props) {
    const obj={"title":props.name,"image":props.image,"rating":props.rating,"desc":props.desc,"price":props.price}
  return (

      <div className='card'>
        <img src={props.image} alt="hello" onClick={()=>props.enhance(obj)}></img>
        <div className='text-info'>
            <a onClick={()=>props.enhance(obj)}><h2>{props.name}</h2></a>
            <p>Rs.&nbsp;{props.price}</p>
            <p>⭐ {props.rating}/5</p>
            <button onClick={()=>props.addItem(props.name,props.image)}>Add to Cart</button>
        </div>
      </div>
  );
}

export default Card;