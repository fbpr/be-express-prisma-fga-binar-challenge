const express = require('express');
const router = express.Router();

router.get('/users');
router.get('/users/:userId');
router.post('/users');
router.put('/users/:userId');
router.delete('/users/:userId');

module.exports = router;
