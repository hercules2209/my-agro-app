const express = require('express');
const axios = require('axios');
const request = require('request');

const app = express();

// Log middleware for general request information
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

// Log middleware for CORS preflight requests
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    res.sendStatus(200);
  } else {
    next();
  }
});

// Route for image predictions with logging
app.all('/predict', (req, res) => {
  console.log('Forwarding image prediction request');
  req.pipe(request.post('https://us-central1-diseasedet.cloudfunctions.net/predict'))
      .on('error', (error) => console.error('Error during image prediction request:', error))
      .pipe(res)
      .on('finish', () => console.log('Image prediction request completed'));
});

// Route for text chat interactions with logging
app.all('/chat', async (req, res) => {
  console.log('Received chat request:', req.body);
  try {
    const response = await axios.post('https://us-central1-diseasedet.cloudfunctions.net/chat', req.body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('Forwarding chat response:', response.data);
    res.status(response.status).send(response.data);
  } catch (error) {
    console.error('Error during chat request:', error);
    res.status(500).send(error.message);
  }
});

app.listen(5000, () => {
  console.log('Proxy server listening on port 5000');
});
