import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expDate: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan } = location.state || {};

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    // Clear previously entered details when the option changes
    setCardDetails({ cardNumber: '', expDate: '', cvv: '' });
    setUpiId('');
    setSelectedBank('');
  };

  const handleBankChange = (e) => {
    setSelectedBank(e.target.value);
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = () => {
    if (!selectedOption) {
      alert('Please select a payment method.');
      return;
    }

    if (selectedOption === 'netbanking' && !selectedBank) {
      alert('Please select a bank.');
      return;
    }

    if ((selectedOption === 'credit' || selectedOption === 'debit') && (cardDetails.cardNumber === '' || cardDetails.expDate === '' || cardDetails.cvv === '')) {
      alert('Please fill in all the card details.');
      return;
    }

    if (selectedOption === 'upi' && !upiId) {
      alert('Please enter your UPI ID.');
      return;
    }

    // Redirect to TransactionPage with payment details
    navigate('/transaction', { state: { paymentMethod: selectedOption, plan: selectedPlan } });
  };

  return (
    <div className="payment-container">
      <h2>Selected Plan: {selectedPlan || 'No plan selected'}</h2>
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <div className={`payment-option ${selectedOption === 'netbanking' ? 'selected' : ''}`}>
          <input
            type="radio"
            id="netbanking"
            name="payment"
            value="netbanking"
            onChange={handleOptionChange}
          />
          <label htmlFor="netbanking">
            <span className="icon">💻</span> Net Banking
          </label>
        </div>
        <div className={`payment-option ${selectedOption === 'credit' ? 'selected' : ''}`}>
          <input
            type="radio"
            id="credit"
            name="payment"
            value="credit"
            onChange={handleOptionChange}
          />
          <label htmlFor="credit">
            <span className="icon">💳</span> Credit Card
          </label>
        </div>
        <div className={`payment-option ${selectedOption === 'debit' ? 'selected' : ''}`}>
          <input
            type="radio"
            id="debit"
            name="payment"
            value="debit"
            onChange={handleOptionChange}
          />
          <label htmlFor="debit">
            <span className="icon">💳</span> Debit Card
          </label>
        </div>
        <div className={`payment-option ${selectedOption === 'upi' ? 'selected' : ''}`}>
          <input
            type="radio"
            id="upi"
            name="payment"
            value="upi"
            onChange={handleOptionChange}
          />
          <label htmlFor="upi">
            <span className="icon">📱</span> UPI
          </label>
        </div>
      </div>

      {/* Conditionally render bank selection for Net Banking */}
      {selectedOption === 'netbanking' && (
        <div className="bank-selection">
          <h3>Select Bank</h3>
          <select value={selectedBank} onChange={handleBankChange} required>
            <option value="">Select your bank</option>
            <option value="hdfc">HDFC Bank</option>
            <option value="icici">ICICI Bank</option>
            <option value="sbi">State Bank of India (SBI)</option>
            <option value="axis">Axis Bank</option>
            <option value="kotak">Kotak Mahindra Bank</option>
            {/* Add more banks as needed */}
          </select>
        </div>
      )}

      {/* Conditionally render card details form */}
      {(selectedOption === 'credit' || selectedOption === 'debit') && (
        <div className="card-details">
          <h3>Enter Card Details</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={handleCardDetailsChange}
            required
          />
          <input
            type="text"
            name="expDate"
            placeholder="Expiration Date (MM/YY)"
            value={cardDetails.expDate}
            onChange={handleCardDetailsChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleCardDetailsChange}
            required
          />
        </div>
      )}

      {/* Conditionally render UPI ID form */}
      {selectedOption === 'upi' && (
        <div className="upi-details">
          <h3>Enter UPI ID</h3>
          <input
            type="text"
            name="upiId"
            placeholder="UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            required
          />
        </div>
      )}

      <button className="pay-button" onClick={handlePayment}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default Payment;
