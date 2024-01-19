import React from 'react';
import AppRouter from './Approuter';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import videoSource from './assets/Background.mp4'; // replace with your actual video path


function App() {

  return (
    
      <div className="App">
      <video autoPlay loop muted id="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay"> {/* used for background blur */}

      {/* <div className="navbar-container"> */}
        <Navbar />
      {/* </div> */}
      {/* <div className="main-container"> */}
        <AppRouter />
      {/* </div> */}

          
        
      </div>
      </div>
    
  );
}

export default App;