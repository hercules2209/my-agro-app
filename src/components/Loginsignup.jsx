import React, { useState } from 'react';
import Signup from './Signup.jsx';
import Login from './Login.jsx';
import './Loginsignup.css';

function LoginSignup() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleSection = () => {
    setShowLogin(!showLogin);
  };

  return (
    
    <div className="" style={{display:"flex", flexDirection:"column",}} >
      <div ></div>
      <div className='log-sign-form'>
        {showLogin?<Signup />:<Login />}
      </div>
      <button onClick={toggleSection}>
        {showLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
      <div></div>
    </div>
  );
}

export default LoginSignup;
