/*
@file: updateStatusRoutes.js:
This route file uses the authmiddleware and updateStatusController to handle the HTTP PUT request for 
updating the status of all users.
*/
const express = require('express');
const router = express.Router();
const updateStatusController = require('../controllers/updateStatusController');
const authMiddleware = require('../middleware/authMiddleware');


router.put('/update-status',authMiddleware.auth,updateStatusController.updateStatus);

module.exports =router;