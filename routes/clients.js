const express = require("express");
const router = express.Router();

//Controller
const Clients = require('../controllers/Clients');

router.get('/:id', Clients.get);
router.put('/:id', Clients.update);

module.exports = router;