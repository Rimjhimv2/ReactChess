  const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ✅ Static routes FIRST
router.post('/register', userController.register);
router.post('/login', userController.login);

// ✅ More specific dynamic routes next
router.post('/:userId/match-history', userController.addMatchToHistory);
router.get('/:userId/match-history', userController.getMatchHistory);

// ✅ Most generic dynamic route LAST
router.get('/:userId', userController.getUserById);

module.exports = router;