import React from 'react';
import { useMediaQuery } from 'react-responsive';


const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav>
      {isMobile ? (<div>
        <h1 style={{ textAlign: 'left', padding: '4px', marginRight: '10px' }} >Farm App</h1>
        {/* This actually need to be a hamburger style menu but I couldn't get that to work */}
        <select>
          <option value="/">Home</option>
          <option value="/services">Chatbot</option> {/*This part is dropdown wit all out ai services  */}
          <option value="/disease">Disease Identification</option>
        </select>
        </div>
      ) : (
        <div>
        <h1 style={{ textAlign: 'left', marginRight: '10px' }} >Farm App</h1>
        <ul style={{ display: 'flex', listStyle: 'none', rightpadding: 10, justifyContent: 'space-between' }}>
        <li><a href="/">Home</a></li>
        <li><a href="/services" >Chatbot</a></li>   {/* Access props correctly */}
        <li><a href="/disease">Disease Identification</a></li> {/* Access props correctly */}
        {/* ... (other links) */}
        </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
