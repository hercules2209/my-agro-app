import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './styles.css';

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav>
      {isMobile ? (<div>
        <h1 style={{ textAlign: 'left', padding: '4px', marginRight: '10px' }} >Farm App</h1>
        {/* This actually need to be a hamburger style menu but I couldn't get that to work */}
        <select>
          <option value="/">Home</option>
          <option value="/services">Services</option> {/*This part is dropdown wit all out ai services  */}
          <option value="/marketplace">Marketplace</option>
          <option value="/about-us">About Us</option>
          <option value="/contact">Contact</option>
          <option value="/login">Login/Signup</option>
        </select>
        </div>
      ) : (
        <div>
        <h1 style={{ textAlign: 'left', marginRight: '10px' }} >Farm App</h1>
        <ul style={{ display: 'flex', listStyle: 'none', rightpadding: 10, justifyContent :'space-between'  }}>
          <li style={{ marginRight: '10px' }}><a href="/">Home</a></li>
          <li style={{ marginRight: '10px' }}><a href="/services">Services</a></li>{/*This part is dropdown wit all out ai services  */}
          <li style={{ marginRight: '10px' }}><a href="/marketplace">Marketplace</a></li>
          <li style={{ marginRight: '10px' }}><a href="/about-us">About Us</a></li>
          <li style={{ marginRight: '10px' }}><a href="/contact">Contact</a></li>
          <li><a href="/login">Login/Signup</a></li>
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
