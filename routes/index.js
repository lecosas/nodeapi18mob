const express = require("express");

const verifyToken = require('../middlewares/verifyToken');

//Routers
const users = require('./clients');

const router = express.Router();
router.use('/clients', /*verifyToken,*/ clients);

module.exports = router;