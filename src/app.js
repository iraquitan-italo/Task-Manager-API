const express = require('express');
const cors = require('cors');
const tasksRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tasks', tasksRoutes);

module.exports = app;