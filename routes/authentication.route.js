// import dependencies
const express = require('express');
const router = express.Router();

// import controller
const AuthenticationController = require('../controllers/authentication.controller');

// api functions
// authenticate & return jwt
router.post('/', AuthenticationController.LogIn);

// export the router
module.exports = router;
