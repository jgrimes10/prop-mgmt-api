// setup .env
require('dotenv').config();

// import dependencies
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbDebug = require('debug')('log:db');
const apiDebug = require('debug')('log:api');

const app = express();

const port = process.env.API_PORT || 3001;
const shouldDebug = process.env.ENV === 'development' || process.env.DEBUGGER;

// connect to db
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
    .then(() => {
        if (shouldDebug) {
            dbDebug('Successfully connected to DB');
        }
    })
    .catch(err => {
        if (shouldDebug) {
            dbDebug('Error connecting to DB: %O', err);
        }
    });

// setup middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// setup routes
const usersRoute = require('./routes/user.route');
const tenantRoute = require('./routes/tenant.route');

app.use('/api/users', usersRoute);
app.use('/api/tenants', tenantRoute);

app.get('/test', (req, res) => {
    return res.status(200).json({
        result: 'Success',
        message: 'Welcome to the Property Management System!'
    });
});

// start server
app.listen(port, () => {
    apiDebug('API is running on port %d', port);
});
