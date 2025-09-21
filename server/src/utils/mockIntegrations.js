const simulateIntegration = (data) => {
  // Mock API call
  return { ...data, status: 'success' };
};

module.exports = { simulateIntegration };