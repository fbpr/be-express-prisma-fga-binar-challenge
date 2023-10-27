const express = require('express');
const router = express.Router();

router.get('/accounts');
router.get('/accounts/:accountId');
router.post('/accounts');
router.put('/accounts/:accountId');
router.delete('/accounts/:accountId');

module.exports = router;
