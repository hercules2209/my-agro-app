import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ImageUpload from './components/ImageUpload';
import Chat from './components/Chat';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

 return (
   <div className="App">
       <Navbar />
       <h1 style={{alignContent:"center", textAlign:"center"}}>Image Upload</h1>
       <ImageUpload setSelectedFile={setSelectedFile} />
       <Chat selectedFile={selectedFile} />
   </div>
 );
}

export default App;