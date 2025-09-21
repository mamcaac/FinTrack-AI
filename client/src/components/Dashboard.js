
import React, { useState } from 'react';
import PaymentButton from './PaymentButton';
import TransactionList from './TransactionList';
import VizChart from './VizChart';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTx) => {
    setTransactions([...transactions, newTx]);
  };

  return (
    <div className="dashboard">
      <h1>FinTrack Dashboard</h1>
      <PaymentButton onPaymentSuccess={addTransaction} />
      <TransactionList transactions={transactions} />
      <VizChart data={transactions} />
    </div>
  );
};

export default Dashboard;