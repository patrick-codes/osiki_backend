const express = require('express');
const router = require('./Routes/auth_router');
const connectDatabase = require('./Config/db_config');
const mongoose = require('mongoose');
const app = express();

//Connecting to MongoDB
connectDatabase();

//Port
const port = process.env.port || 3000;

//Middleware
app.use(express.json());
app.use('/api',router);

app.listen(port,()=>{console.log(`Server Started and running on port ${port}`);
});
