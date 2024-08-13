// src/components/Transaction/TransactionPage.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TransactionPage.css';

const TransactionPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { paymentMethod, plan } = location.state || {};

  // Define plan prices
  const planPrices = {
    beginner: 20,
    intermediate: 50,
    pro: 100
  };

  // Retrieve the price based on the selected plan
  const price = plan ? planPrices[plan] : 0;

  const handleSuccess = () => {
    alert('Payment Successful!');
    navigate('/home'); // Redirect to the home page or any other page after successful payment
  };

  return (
    <div className="transaction-container">
      <h2>Payment Summary</h2>
      <div className="payment-details">
        <p><strong>Plan:</strong> {plan ? plan.charAt(0).toUpperCase() + plan.slice(1) : 'No plan selected'}</p>
        <p><strong>Price:</strong> $2000{price}</p>
        <p><strong>Payment Method:</strong> {paymentMethod ? paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1) : 'No payment method selected'}</p>
      </div>
      <button className="success-button" onClick={handleSuccess}>
        Proceed
      </button>
    </div>
  );
};

export default TransactionPage;
