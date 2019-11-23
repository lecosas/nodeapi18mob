const express = require("express");
const router = express.Router();

//Controller
const Clients = require('../controllers/Clients');

router.get('/', Clients.list);
router.get('/:id', Clients.get);
router.put('/:id', Clients.update);
router.delete('/:id', Clients.delete);
router.post('/', Clients.create);

module.exports = router;