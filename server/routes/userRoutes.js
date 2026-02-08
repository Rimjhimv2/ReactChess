//   const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');


// router.post('/register', userController.register);
// router.post('/login', userController.login);


// router.post('/:userId/match-history', userController.addMatchToHistory);
// router.get('/:userId/match-history', userController.getMatchHistory);



// module.exports = router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { restrictToLoginUserOnly } = require('../middlewares/auth'); // ✅ add this

// ✅ Static routes FIRST
router.post('/register', userController.register);
router.post('/login', userController.login);

// ✅ Protected profile route
router.get('/profile', restrictToLoginUserOnly, userController.getProfile); // ✅ add this

// ✅ More specific dynamic routes next
router.post('/:userId/match-history', userController.addMatchToHistory);
router.get('/:userId/match-history', userController.getMatchHistory);

// ✅ Most generic dynamic route LAST
router.get('/:userId', userController.getUserById);

module.exports = router;