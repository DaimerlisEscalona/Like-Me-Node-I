const express = require('express');
const router = express.Router();

const indexControllers = require("../Controllers/indexControllers.js")
const postsControllers = require('../Controllers/postsControllers.js');

router.get("/", indexControllers.load);
router.get("/posts", postsControllers.get)
router.post("/posts", postsControllers.post)

module.exports = router;
