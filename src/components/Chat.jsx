import React, { useState } from 'react';
import './styles.css';

function Chat({selectedFile}) {
   const [response, setResponse] = useState('');

   const handleClick = async () => {

    // Check if file is selected
    if (!selectedFile || !(selectedFile instanceof File) || !selectedFile.type.startsWith('image/')) {
        console.error("Please select an image file");
        setResponse("Please select an image file");
        return;
      }
    // const base64Image = await new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.onloadend = () => resolve(reader.result);
    //     reader.onerror = reject;
    //     reader.readAsDataURL(selectedFile);
    // });
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
    setResponse(data);
 };

 return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding:"10px" }}>
      <button style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }} onClick={handleClick}>
        Submit
      </button>
      <h1 style={{ marginTop: '20px' }}>Chat</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', marginTop: '20px', width: '80%', overflow: 'auto',minHeight:'200px' }}>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default Chat;