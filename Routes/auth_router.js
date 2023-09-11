const express = require('express');
const {
  getAllUsers,
  createUser,
  getSingleUser
} = require('../Controllers/auth_controller');
const router = express.Router();

router.get('/getusers', getAllUsers);
router.post('/signup', createUser);
router.post('/login', getSingleUser);

module.exports = router
