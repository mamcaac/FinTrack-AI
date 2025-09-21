
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const VizChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => `Tx ${i + 1}`),
    datasets: [{
      label: 'Amounts',
      data: data.map(tx => tx.amount),
      backgroundColor: 'rgba(75,192,192,0.4)',
    }],
  };

  return <div className="chart"><Bar data={chartData} /></div>;
};

export default VizChart;