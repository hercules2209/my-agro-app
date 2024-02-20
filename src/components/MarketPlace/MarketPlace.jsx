import React, { useState, useEffect } from 'react';
import './MarketPlace.css';
import Card from './Card.jsx';
import Cart from './Cart.jsx';
import ItemEnhanced from './itemEnhanced.jsx';
import { getDatabase, ref, onValue } from 'firebase/database';

function MarketPlace() {
  const [tools, setTools] = useState([]);
  const [seeds, setSeeds] = useState([]);
  const [fertilizers, setFertilizers] = useState([]);
  const [displayEnhanced, setDisplayEnhanced] = useState(false);
  const [enhancedContent, setEnhancedContent] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const toolsRef = ref(db, 'tools');
    const seedsRef = ref(db, 'seeds');
    const fertilizersRef = ref(db, 'fertilizers');

    const fetchData = (snapshot, setter) => {
      const data = snapshot.val();
      if (data) {
        setter(data);
      }
    };

    onValue(toolsRef, (snapshot) => fetchData(snapshot, setTools));
    onValue(seedsRef, (snapshot) => fetchData(snapshot, setSeeds));
    onValue(fertilizersRef, (snapshot) => fetchData(snapshot, setFertilizers));
  }, []);

  const toggleEnhanced = (contents) => {
    setEnhancedContent(contents);
    setDisplayEnhanced(!displayEnhanced);
  };

  const removeItem = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.title === item ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.quantity > 0));
  };

  const addItem = (item, image) => {
    const existingItem = cartItems.find((cartItem) => cartItem.title === item);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.title === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { title: item, image, quantity: 1 }]);
    }
  };

  const handleEnhance = (contents) => {
    setEnhancedContent(contents);
    setDisplayEnhanced(true);
  };

  const renderItems = (items) => {
    return items.map((item, index) => (
      <Card
        key={index}
        image={item.image}
        name={item.name}
        rating={item.rating}
        addItem={addItem}
        enhance={handleEnhance} // Pass the handleEnhance function
        desc={item.desc}
        price={item.price}
      />
    ));
  };

  return (
    <div className='market-main'>
      <Cart cartItems={cartItems} increase={addItem} decrease={removeItem} />
      {displayEnhanced && (
        <ItemEnhanced
          close={() => setDisplayEnhanced(false)}
          title={enhancedContent.title}
          desc={enhancedContent.desc}
          image={enhancedContent.image}
          addItem={addItem}
          price={enhancedContent.price}
        />
      )}
      <div className='section-head'>
        <h1>Tools</h1>
      </div>
      <div className='scroll-menu'>{renderItems(tools)}</div>
      <div className='section-head'>
        <h1>Seeds</h1>
      </div>
      <div className='scroll-menu'>{renderItems(seeds)}</div>
      <div className='section-head'>
        <h1>Fertilizers</h1>
      </div>
      <div className='scroll-menu'>{renderItems(fertilizers)}</div>
    </div>
  );
}

export default MarketPlace;
