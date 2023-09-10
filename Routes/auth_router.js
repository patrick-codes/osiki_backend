const express = require('express');
const {getAllUsers,createUser,getSingleUser} = require('../Controllers/auth_controller');
const router = express.Router();

router.route('/getusers').get(getAllUsers);
router.route('/signup').post(createUser);
router.route('/login').get(getSingleUser);







module.exports = router;