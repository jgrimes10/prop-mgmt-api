// import dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// setup the tenant model
const Tenant = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        maxlength: 2,
        minlength: 2
    },
    zipCode: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 5
    },
    activeRenter: {
        type: Boolean,
        default: false
    },
    rentalStartDate: {
        type: Date
    },
    rentalEndDate: {
        type: Date
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tenant', Tenant);
