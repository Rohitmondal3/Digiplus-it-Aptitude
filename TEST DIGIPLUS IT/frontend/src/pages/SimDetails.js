import React, { useState } from 'react';
import { getSimDetails } from '../services/api';

const SimDetails = () => {
  const [simNumber, setSimNumber] = useState('');
  const [simDetails, setSimDetails] = useState(null);
  const [message, setMessage] = useState('');

  const handleGetDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await getSimDetails(simNumber);
      setSimDetails(response.data);
      setMessage('');
    } catch (error) {
      setMessage(error.response?.data?.message || 'SIM not found');
    }
  };

  return (
    <div>
      <h2>Get SIM Details</h2>
      <form onSubmit={handleGetDetails}>
        <input 
          type="text"
          placeholder="Enter SIM Number"
          value={simNumber}
          onChange={(e) => setSimNumber(e.target.value)}
        />
        <button type="submit">Get Details</button>
      </form>

      {message && <p>{message}</p>}

      {simDetails && (
        <div>
          <p><strong>SIM Number:</strong> {simDetails.simNumber}</p>
          <p><strong>Phone Number:</strong> {simDetails.phoneNumber}</p>
          <p><strong>Status:</strong> {simDetails.status}</p>
          <p><strong>Activation Date:</strong> {simDetails.activationDate ? new Date(simDetails.activationDate).toLocaleString() : 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default SimDetails;
