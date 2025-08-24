const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Hi there!');
});

// Another route example
app.get('/about', (req, res) => {
  res.send('This is my first Node.js web app for CI/CD pipeline');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});