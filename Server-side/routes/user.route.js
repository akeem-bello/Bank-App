const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.post('/signup', userController.registerUser);
router.post('/signin', userController.signin);
router.get('/dashboard', userController.getDashboard);
module.exports = router;