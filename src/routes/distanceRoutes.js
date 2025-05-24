/*
@file: distanceRoutes.js
* It handles the routing for finding the distance between the points. It creates the instance of the express router which
uses the get http method for accessing the distance and also uses the auth middleware for verificAtion..
*/
const express = require('express');
const router = express.Router();
const distanceController = require('../controllers/distanceController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/get-distance',authMiddleware.auth,distanceController.getDistanceController);

module.exports =router;