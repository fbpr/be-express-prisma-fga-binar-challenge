const express = require('express');
const {
  addTransaction,
  getTransactionById,
  getTransactions,
} = require('../controllers/transactions.controller');
const router = express.Router();

router.get('/transactions', getTransactions);
router.get('/transactions/:transactionId', getTransactionById);
router.post('/transactions', addTransaction);

module.exports = router;
