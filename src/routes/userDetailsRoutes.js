/*
@fiule: userDetailsRoutes.js
This route file is aninstance of expres router and uses the authmiddleware and userDtailsController
to handle the HTTP GET request method for accessing the user details.
*/

const express = require('express');
const router = express.Router();
const userDetailsController = require('../controllers/userDetailsController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/get-users',authMiddleware.auth,userDetailsController.viewUsersController);

module.exports =router;