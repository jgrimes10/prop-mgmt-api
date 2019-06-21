// import dependencies
let User;

// create a new user
exports.CreateUser = function (req, res) {
    const user = new User(req.body);

    user.save()
        .then(user => {
            return res.status(201).send(user);
        })
        .catch(err => {
            return res.status(500).send(err);
        });
};

// get all users
exports.GetAllUsers = function (req, res) {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(users);
    });
};

// get a user by id
exports.GetUserById = function (req, res) {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(user);
    });
};

// update a user by id
exports.UpdateUserById = function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(updatedUser);
    });
};

// delete a user by id
exports.DeleteUserById = function (req, res) {
    User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).send(deletedUser);
    })
};

// putting this at the bottom is a hack so WebStorm intellisense works with Schema functions
User = require('../models/user.model');
