// setup .env
require('dotenv').config();

// import dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = process.env.API_PORT || 3001;

// connect to db
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
    .then(() => {
        console.log('Successfully connected to DB');
    })
    .catch(err => {
        console.log(`Error connecting to DB: ${err}`);
    });

// setup middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// setup routes

// start server
app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
