// backend/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';

let dailyCode = generateRandomCode();

function generateRandomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendCodeToTelegram(code) {
  axios.post(`https://api.telegram.org/bot${8033952433:AAH5pDZtSWAlPUC_g9hLkaQFfoIF-WQHN4I}/sendMessage`, {
    chat_id: -4703917708,
    text: `📢 Admin Daily Code: ${code}`
  });
}

// Send daily code at server startup
sendCodeToTelegram(dailyCode);

// Refresh the code every 24 hours (86400000 ms)
setInterval(() => {
  dailyCode = generateRandomCode();
  sendCodeToTelegram(dailyCode);
}, 86400000);

app.get('/admin-code', (req, res) => {
  res.json({ code: dailyCode });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
