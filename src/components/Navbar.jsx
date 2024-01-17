import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    
    setMenuVisible(!menuVisible);
  };

  return (
    <nav>
      {isMobile ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection:"row"}}>
            <h1 style={{ textAlign: 'left', padding: '4px', marginRight: '10px' }}>Farm App</h1>
            {
              <div onClick={toggleMenu} style={{ cursor: 'pointer', alignItems:"flex-start" }} >
                &#9776;
              </div>
            } 
          </div>
          {menuVisible && (
          <ul onChange={toggleMenu} style={{ display: 'flex', listStyle: 'none', rightpadding: 10, flexDirection:"column"}}>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Chatbot</a></li>
            <li><a href="/disease">Disease Identification</a></li>
            <li><a href="/recommend">Crop Recommendation</a></li>
            <li><a href="/weather">Weather</a></li>
            <li><a href="/market">Market</a></li>
            <li><a href="/#About">About</a></li>
          </ul>
          )}
          
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: 'left', marginRight: '10px' }}>Farm App</h1>
          <ul style={{ display: 'flex', listStyle: 'none', rightpadding: 10, justifyContent: 'space-between' }}>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Chatbot</a></li>
            <li><a href="/disease">Disease Identification</a></li>
            <li><a href="/recommend">Crop Recommendation</a></li>
            <li><a href="/weather">Weather</a></li>
            <li><a href="/market">Market</a></li>
            <li><a href="/#About">About</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
