// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Temporary in-memory storage for messages
let messages = [];

app.use(bodyParser.json());

// Endpoint to get all messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// Endpoint to create a new message
app.post('/api/messages', (req, res) => {
  const { text } = req.body;
  const newMessage = {
    id: messages.length + 1,
    text: text
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});