import React, { useState } from 'react';
import api from '../services/api';

const PaymentButton = ({ onPaymentSuccess }) => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('UPI');

  const handlePayment = async () => {
    try {
      const response = await api.post('/api/payments/simulate', { amount: parseFloat(amount), method });
      onPaymentSuccess(response.data);
      alert('Payment simulated successfully!');
    } catch (error) {
      alert('Payment failed');
    }
  };

  return (
    <div>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option>UPI</option>
        <option>Card</option>
      </select>
      <button className="button" onClick={handlePayment}>1-Click Pay</button>
    </div>
  );
};

export default PaymentButton;