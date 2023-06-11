const express = require("express");
const {post,get, getById, update, remove} = require('./blog.controller.js');
const router = express.Router();

router.post('/',post)
router.get('/',get)
router.get('/:id',getById)
router.put('/',update)
router.delete('/:id',remove);

module.exports = router;