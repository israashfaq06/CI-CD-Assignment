// This change will trigger the CI/CD pipeline - [Isra Ashfaq]
const express = require('express');
const app = express();
const port = 3001;

// Basic route
app.get('/', (req, res) => {
  res.send('Hi there, this my CI/CD Assignmentttt!');
});

// Another route example
app.get('/about', (req, res) => {
  res.send('This is my first Node.js web app for CI/CD pipelineee');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop the server');
});