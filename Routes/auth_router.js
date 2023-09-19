const express = require('express');
const {
  getAllUsers,
  createUser,
  login
} = require('../Controllers/auth_controller');
const router = express.Router();

router.get('/getusers', getAllUsers);
router.post('/signup', createUser);
router.post('/login', login);

module.exports = router
