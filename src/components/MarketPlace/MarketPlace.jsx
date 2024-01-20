import React, { useState, useEffect } from 'react';
import './MarketPlace.css';
import Card from "./Card.jsx";
import Cart from "./Cart.jsx"
import {tools,seeds,fertilizers} from "./items.js"

let cartItems=[]

// function addItem(item){
//     cardItems.push({"title":item,"quantity":1})
// }

function MarketPlace() {

    const [cartState,setCartState] = useState([]);

    function addItem(item){
        for(let i=0;i<cartItems.length;i++){
            if(cartItems[i].title===item){
                cartItems[i].quantity +=1;
                setCartState(cartItems);
                return
            }
        }
        cartItems.push({"title":item,"quantity":1});
        setCartState(cartItems);
    }
    
  return (
    <div className='market-main'>
            <Cart cartItems={cartState}/>
            <div className="section-head"><h1>Tools</h1></div>
            <div className='scroll-menu'>
            {tools.map((item, index) => (
                <Card
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    addItem={addItem}
                    // desc={item.desc}
                />
                ))}
            </div>
            <div className="section-head"><h1>Seeds</h1></div>
            <div className='scroll-menu'>
            {seeds.map((item, index) => (
                <Card
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    addItem={addItem}
                    // desc={item.desc}
                />
                ))}
            </div>
            <div className="section-head"><h1>Fertilizers</h1></div>
            <div className='scroll-menu'>
            {fertilizers.map((item, index) => (
                <Card
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    addItem={addItem}
                    // desc={item.desc}
                />
                ))}
            </div>
    </div>

  );
}

export default MarketPlace;