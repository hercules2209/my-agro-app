import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

function Navbar (){
  const isMobile = useMediaQuery({ maxWidth: 920 });
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="nav-container">
    <nav>
      {isMobile ? (
        <div>
          <div style={{ display: 'flex', justifyContent:"space-between", flexDirection:"row"}}>
            <h1 style={{ textAlign: 'left', padding: '4px', marginRight: '10px' }}>Farm App</h1>
            {
              <div onClick={toggleMenu} style={{ cursor: 'pointer'}} >
                &#9776;
              </div>
            } 
          </div>
          {menuVisible && (
            <ul onChange={toggleMenu} style={{ display: 'flex', listStyle: 'none', rightpadding: 10, flexDirection: "column" }}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Chatbot</NavLink></li>
              <li><NavLink to="/disease">Disease Identification</NavLink></li>
              <li><NavLink to="/recommend">Crop Recommendation</NavLink></li>
              <li><NavLink to="/weather">Weather</NavLink></li>
              <li><NavLink to="/market">Market</NavLink></li>
              <li><NavLink to="/logup">Signup/Login</NavLink></li>
              </ul>
          )}
          
        </div>
      ) : (
        <div>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between' }}>
              <li><NavLink to="/">
                <img src="../assets/chatgpt.svg" alt="Farm App Logo" />
              </NavLink></li>
              <li><NavLink to="/services">Chatbot</NavLink></li>
              <li><NavLink to="/disease">Disease Identification</NavLink></li>
              <li><NavLink to="/recommend">Crop Recommendation</NavLink></li>
              <li><NavLink to="/#News">News</NavLink></li>
              <li><NavLink to="/market">Market</NavLink></li>
              <li><NavLink to="/logup">Sign up/ Login</NavLink></li>
            </ul>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
