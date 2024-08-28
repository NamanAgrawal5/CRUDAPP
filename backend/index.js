const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const { notFound, errorHandler} = require('./middlewares/errorHandler');
const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/tasks', require('./routes/taskRoutes'));

app.use(notFound, errorHandler);
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});