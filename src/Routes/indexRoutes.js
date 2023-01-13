const express = require('express');
const router = express.Router();

const indexController = require('../Controllers/indexControllers')
const postsRoutes = require('./postsRoutes')

router.get("/", indexController.load);
router.use('/posts', postsRoutes);


module.exports = router;

