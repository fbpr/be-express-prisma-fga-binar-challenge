const express = require('express');
const {
  createAccount,
  getAccounts,
  getAccountsById,
  editAccount,
  deleteAccount,
} = require('../controllers/accounts.controller');
const router = express.Router();

router.get('/accounts', getAccounts);
router.get('/accounts/:accountId', getAccountsById);
router.post('/accounts', createAccount);
router.put('/accounts/:accountId', editAccount);
router.delete('/accounts/:accountId'), deleteAccount;

module.exports = router;
