const express = require("express");
const router = express.Router();

//Controller
const Users = require('../controllers/Users');

router.get('/', Users.list);
router.get('/:id', Users.get);
router.put('/:id', Users.update);
router.delete('/:id', Users.delete);
router.post('/', Users.create);

module.exports = router;