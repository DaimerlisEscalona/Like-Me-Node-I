const express = require('express');
const router = express.Router();

const postsControllers = require('../Controllers/postsControllers.js')

router.use(express.static('Views'))

// router.get('/', postsControllers.load)
// router.post('/', postsControllers.addSong)
// router.put('/:id', postsControllers.editSong)
// router.delete('/:id', postsControllers.deleteSong)


module.exports = router;
