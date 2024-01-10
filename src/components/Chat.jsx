import React, { useState } from 'react';
import './styles.css';

function Chat({ selectedFile, setShowSubmitButton }) {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    // Check if file is selected
    if (!selectedFile || !(selectedFile instanceof File) || !selectedFile.type.startsWith('image/')) {
      console.error("Please select an image file");
      setResponse("Please select an image file");
      // Hide the submit button when no image is selected
      setShowSubmitButton(false);
      return;
    }

    const formData = new FormData();

    formData.append('file', selectedFile);

    // Send the image to the server
    const result = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      body: formData,
    });

    // Get the response from the server
    const data = await result.json();
    console.log(data);
    // Update the state with the response
    const details = data.details;
    setResponse(details);

    // Show the submit button in ImageUpload
    setShowSubmitButton(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding:"10px" }}>
      <h1 style={{ marginTop: '20px' }}>Chat</h1>
      <div style={{ border: '1px solid #fff', borderRadius: '5px', padding: '20px', marginTop: '20px', width: '80%', overflow: 'auto', minHeight: '200px' }}>
        {response && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '10px' }}>
          <img src="/Avatar.jpeg" alt="Avatar" style={{ borderRadius: '50%', marginRight: '10px', width: '50px', height: '50px' }} />
          <div style={{ backgroundColor: '#f0f0f0', borderRadius: '20px', padding: '10px', maxWidth: '80%' }}>
            <p style={{ whiteSpace: 'pre-wrap', fontSize: '18px' }}>{response}</p>
          </div>
        </div>}
      </div>
      {/* Show the submit button only when an image is selected */}
      {selectedFile && (
        <button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer', marginTop: '20px' }} onClick={handleClick}>
          Submit
        </button>
      )}
    </div>
  );
}

export default Chat;
