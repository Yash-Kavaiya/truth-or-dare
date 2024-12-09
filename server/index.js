// server/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Data store for truth and dare questions
const truthQuestions = [
  "What's your biggest fear?",
  "What's the most embarrassing thing you've done?",
  "What's your biggest regret?",
  // Add more truth questions
];

const dareActions = [
  "Dance for 30 seconds",
  "Sing your favorite song",
  "Do 10 pushups",
  // Add more dare actions
];

// Routes
app.post('/api/players', (req, res) => {
  try {
    const { players } = req.body;
    // Validate players
    if (!players || !Array.isArray(players) || players.length < 2) {
      return res.status(400).json({ error: 'Invalid players data' });
    }
    res.json({ success: true, players });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/question/:type', (req, res) => {
  try {
    const { type } = req.params;
    const questions = type === 'truth' ? truthQuestions : dareActions;
    const randomIndex = Math.floor(Math.random() * questions.length);
    res.json({ 
      question: questions[randomIndex],
      type
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});