const express = require('express');
const router = express.Router();

const postsControllers = require('../Controllers/postsControllers.js');

router.get("/", postsControllers.get)
router.post("/", postsControllers.post)
router.put("/like/:id", postsControllers.put)
router.delete("/:id", postsControllers.delete);

module.exports = router;
