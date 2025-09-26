const express = require('express');
const app = express();
const port = 3000;

// Basic endpoint to show the frontend is running
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Express Frontend</title>
        <style>
          body { font-family: sans-serif; text-align: center; margin-top: 50px; }
          .container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
          h1 { color: #333; }
          .highlight { font-weight: bold; color: #007bff; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Express Frontend Running</h1>
          <p>This application is listening on port <span class="highlight">${port}</span>.</p>
          <p>This page confirms the frontend is deployed and accessible.</p>
        </div>
      </body>
    </html>
  `);
});

// Health check endpoint for a process manager
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Express frontend listening on port ${port}`);
});
