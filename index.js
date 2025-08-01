const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Health check route
app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
