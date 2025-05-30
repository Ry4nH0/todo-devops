const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
