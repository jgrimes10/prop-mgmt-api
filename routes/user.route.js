// import dependencies
const express = require('express');
const router = express.Router();

// import controller
const UserController = require('../controllers/user.controller');

// api functions
// get all users
router.get('/', UserController.GetAllUsers);

// get user by id
router.get('/:id', UserController.GetUserById);

// add new user
router.post('/', UserController.CreateUser);

// update user by id
router.put('/:id', UserController.UpdateUserById);

// delete user by id
router.delete('/:id', UserController.DeleteUserById);

module.exports = router;
