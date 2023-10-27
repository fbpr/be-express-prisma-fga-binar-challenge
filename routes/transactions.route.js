const express = require('express');
const router = express.Router();

router.get('/transactions');
router.get('/transactions/:transactionId');
router.post('/transactions');
router.put('/transactions/:transactionId');
router.delete('/transactions/:transactionId');

module.exports = router;
