const R = require('ramda');
const jwt = require('jsonwebtoken');
const { simulateIntegration } = require('../utils/mockIntegrations');
const Transaction = require('../models/transactionModel');
const { validatePayment } = require('../utils/fpUtils');

const simulatePayment = async (req, res) => {
  const { amount, method } = req.body;

  // FP chain for validation and processing
  const processed = R.pipe(
    validatePayment,
    R.assoc('timestamp', new Date().toISOString()),
    simulateIntegration
  )({ amount, method });

  if (processed.error) {
    return res.status(400).json({ error: processed.error });
  }

  // Save to DB
  const tx = await Transaction.create(processed);
  res.json(tx);
};

module.exports = { simulatePayment };