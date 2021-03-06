// import dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setup user model
const User = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", User);
