/*
@file: createUserRoutes.js
* It handles the routing for creating a new user in the application. It creates the instance of the express router which
helps in accessing the post request for creating a new user.
* It uses the createUserController to handle the logic for creating a new user.
*/

const express = require('express');
const app = express();
const router = express.Router();
const createUserController = require('../controllers/createUserController');


router.post('/create-user',createUserController.createUser);

module.exports =router;