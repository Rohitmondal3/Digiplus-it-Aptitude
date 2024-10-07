import React, { useState } from 'react';
import { activateSim } from '../services/api';

const ActivateSim = () => {
  const [simNumber, setSimNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleActivate = async (e) => {
    e.preventDefault();
    try {
      const response = await activateSim(simNumber);
      setMessage(`SIM Activated: ${response.data.simNumber}`);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error activating SIM');
    }
  };

  return (
    <div>
      <h2>Activate SIM Card</h2>
      <form onSubmit={handleActivate}>
        <input 
          type="text"
          placeholder="Enter SIM Number"
          value={simNumber}
          onChange={(e) => setSimNumber(e.target.value)}
        />
        <button type="submit">Activate SIM</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ActivateSim;
