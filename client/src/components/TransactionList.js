
import React from 'react';

const TransactionList = ({ transactions }) => (
  <ul className="list">
    {transactions.map((tx, index) => (
      <li key={index}>{`${tx.amount} via ${tx.method} at ${tx.timestamp}`}</li>
    ))}
  </ul>
);

export default TransactionList;