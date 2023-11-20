const express = require('express');
const router = express.Router();

const authController = require('../controller/AuthController');

router.get('/', authController.home);
router.get('/cadastrar', authController.register);
router.post('/login', authController.loginPost);

router.post('/register', authController.registerPost);
router.post('/logout', authController.logout);

// router.get('/looks', authController.showLooks);

module.exports = router;
