import React, { useState } from 'react';
import { deactivateSim } from '../services/api';

const DeactivateSim = () => {
  const [simNumber, setSimNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleDeactivate = async (e) => {
    e.preventDefault();
    try {
      const response = await deactivateSim(simNumber);
      setMessage(`SIM Deactivated: ${response.data.simNumber}`);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error deactivating SIM');
    }
  };

  return (
    <div>
      <h2>Deactivate SIM Card</h2>
      <form onSubmit={handleDeactivate}>
        <input 
          type="text"
          placeholder="Enter SIM Number"
          value={simNumber}
          onChange={(e) => setSimNumber(e.target.value)}
        />
        <button type="submit">Deactivate SIM</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeactivateSim;
