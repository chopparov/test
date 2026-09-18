// ============================================
// BACKEND: Express server
// ============================================
// This is the piece that makes you "full-stack." A backend's job:
// receive requests, do something (save data, check a database,
// run logic), and send a response back.

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// This lets Express understand JSON sent in a request body
// (needed for our fetch() POST from script.js)
app.use(express.json());

// This serves index.html, styles.css, script.js automatically
// from the /public folder as static files.
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'messages.json');

// Make sure our "database" file exists before we start
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]');
}

// ---------- ROUTES ----------

// GET route: browser asking "give me data"
// Try it at http://localhost:3000/api/messages
app.get('/api/messages', (req, res) => {
  const messages = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(messages);
});

// POST route: browser sending "here's data, save it"
// This is what our contact form calls.
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation — always check what the client sent you
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in every field.' });
  }

  const messages = JSON.parse(fs.readFileSync(DATA_FILE));
  messages.push({ name, email, message, receivedAt: new Date().toISOString() });
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2));

  console.log(`New message from ${name} (${email})`);

  // 200 = success. We send back JSON the frontend can read.
  res.status(200).json({ message: `Thanks ${name}! We'll be in touch.` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
