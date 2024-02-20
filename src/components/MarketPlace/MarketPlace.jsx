import React, { useState, useEffect } from 'react';
import './MarketPlace.css';
import Card from "./Card.jsx";
import Cart from "./Cart.jsx";
import ItemEnhanced from './itemEnhanced.jsx';
import { getDatabase, ref, onValue } from 'firebase/database';

function MarketPlace() {
    const [tools, setTools] = useState([]);
    const [seeds, setSeeds] = useState([]);
    const [fertilizers, setFertilizers] = useState([]);

    const [displayEnhanced, setDisplayEnhanced] = useState(false);
    const [enhancedContent, setEnhancedContent] = useState({});
    const [cartItems,setCartItems] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const toolsRef = ref(db, 'tools');
        const seedsRef = ref(db, 'seeds');
        const fertilizersRef = ref(db, 'fertilizers');

        onValue(toolsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setTools(data);
                console.log(tools);
            }
        });
        

        onValue(seedsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setSeeds(data);
            }
        });

        onValue(fertilizersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setFertilizers(data);
            }
        });
    }, []);

    function toggleEnhanced (contents){
        setEnhancedContent(contents);
        console.log(enhancedContent);
        setDisplayEnhanced(!displayEnhanced);
    }
    let enhancedData = {};
    const [cartState,setCartState] = useState([]);
    function removeItem(item){
        for(let i=0;i<cartItems.length;i++){
            if(cartItems[i].title===item){
                cartItems[i].quantity -=1;
                if(cartItems[i].quantity == 0){
                    cartItems.splice(i,1);
                }
                setCartState(cartItems);
                console.log(cartItems);
                return
            }
        }
    }

    function addItem(item,image){
        for(let i=0;i<cartItems.length;i++){
            if(cartItems[i].title===item){
                cartItems[i].quantity +=1;
                setCartState(cartItems);
                console.log(cartItems);
                return
            }
        }
        cartItems.push({"title":item,"image":image,"quantity":1});
        setCartState(cartItems);
    }
    return (
        <div className='market-main'>
            <Cart cartItems={cartState} increase={addItem} decrease={removeItem}/>
            { displayEnhanced && <ItemEnhanced close={toggleEnhanced} title={enhancedContent.title} desc={enhancedContent.desc} image={enhancedContent.image} addItem={addItem} price={enhancedContent.price}/>}
            <div className="section-head"><h1>Tools</h1></div>
            <div className='scroll-menu'>
                {tools.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        rating={item.rating}
                        addItem={addItem}
                        enhance={toggleEnhanced}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="section-head"><h1>Seeds</h1></div>
            <div className='scroll-menu'>
                {seeds.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        rating={item.rating}
                        addItem={addItem}
                        enhance={toggleEnhanced}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
            <div className="section-head"><h1>Fertilizers</h1></div>
            <div className='scroll-menu'>
                {fertilizers.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        rating={item.rating}
                        addItem={addItem}
                        enhance={toggleEnhanced}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default MarketPlace;
