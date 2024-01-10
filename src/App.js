import React, { useState } from 'react';
import AppRouter from './Approuter';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import videoSource from './assets/Background.mp4'; // replace with your actual video path


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  return (
    
      <div className="App">
      <video autoPlay loop muted id="video-background">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay"></div> {/* used for background blur */}

      <Navbar />
      <AppRouter />

          
        

      </div>
    
  );
}

export default App;