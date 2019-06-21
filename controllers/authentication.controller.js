// import dependencies
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let User;

// login
exports.LogIn = function (req, res) {
    let userPass = '';

    // find the user by email
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }

        // no user found with given email
        if (user === null) {
            return res.status(404).send('Email not found.');
        }

        // user found, get their hashed password
        userPass = user.password;
    })
        .then(() => {
            // compare the password given and the stored password
            bcrypt.compare(req.body.password, userPass, (err, result) => {
                // something happened wrong during the compare
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }

                // the passwords do not match
                if (!result) {
                    return res.status(401).json({
                        error: 'Unauthorized'
                    });
                }

                // the passwords match, give a token
                jwt.sign({password: req.body.password}, process.env.JWT_SECRET, (err, token) => {
                    if (err) {
                        return res.status(401).send(err.message);
                    }

                    return res.status(200).json({
                        token: token
                    });
                });
            });
        });
};

// putting this at the bottom is a hack so WebStorm intellisense works with Schema functions
User = require('../models/user.model');
