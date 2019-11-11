const express = require("express");

const verifyToken = require('../middlewares/verifyToken');

//Controllers:
const Auth = require('../controllers/Auth');

//Routes:
const clients = require('./clients');
const users = require('./users');

const router = express.Router();
router.post('/auth', Auth.auth);
router.use('/clients', verifyToken, clients);
router.use('/users', verifyToken, users);

module.exports = router;