const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const name = "Gokul Krishna P Prem"; // Replace with your actual name
  const registerNumber = "2023MCS310003"; // Replace with your actual register number

  // Send an HTML response with CSS styling
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h1 {
          color: #007acc;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2em;
          margin: 5px 0;
        }
        .footer {
          margin-top: 20px;
          font-size: 0.9em;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Indian Institute of Information Technology</h1>
        <p>Welcome, ${name}!</p>
        <p>Your Register Number: ${registerNumber}</p>
        <div class="footer">Thank you for visiting</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
