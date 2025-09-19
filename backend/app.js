const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

// app.use(cors({ origin: 'http://localhost:5500' }))
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(express.json());
app.use('/api/todos', todoRoutes);

// Add this route to handle the root path
app.get('/', (req, res) => {
  res.send('Welcome to the Todo Backend API');
});

app.listen(3000, () => console.log('Server running on port 3000'));
