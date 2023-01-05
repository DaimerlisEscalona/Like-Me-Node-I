const express = require('express');
const router = express.Router();

const postsControllers = require('../Controllers/postsControllers.js')

//router.get('/', postsControllers.load)
router.get("/", postsControllers.showTable)
router.post("/", postsControllers.saveLog)

module.exports = router;
