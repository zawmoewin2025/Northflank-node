const express = require('express');
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const uuid = process.env.UUID || 'ad93364d-a059-4592-a96e-92791696b99d'; // ကိုယ်ပိုင် UUID ပြောင်းသုံးပါ
const port = process.env.PORT || 3000;

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

app.get('/', (req, res) => {
  res.send('Server is running properly.');
});

wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');
  
  ws.on('message', (data) => {
    // VLESS logic implementation here
    // မှတ်ချက် - ဒါက အခြေခံ connection ဆောက်ပုံသာ ဖြစ်သည်
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
