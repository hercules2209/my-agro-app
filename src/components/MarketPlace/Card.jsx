import React, { useState, useEffect } from 'react';
import './MarketPlace.css';
function Card(props) {
  return (
      <div className='card'>
        <img src={props.image} alt="hello"></img>
        <div className='text-info'>
            <a><h2>{props.name}</h2></a>
            {/* <p>{props.desc}</p> */}
            <p>⭐ {props.rating}/5</p>
            <button onClick={()=>props.addItem(props.name)}>Add to Cart</button>
        </div>
      </div>
  );
}

export default Card;