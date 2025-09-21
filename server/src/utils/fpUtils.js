
const R = require('ramda');

const validatePayment = R.curry((data) => {
  if (data.amount <= 0) return { ...data, error: 'Invalid amount' };
  if (!['UPI', 'Card'].includes(data.method)) return { ...data, error: 'Invalid method' };
  return data;
});

module.exports = { validatePayment };