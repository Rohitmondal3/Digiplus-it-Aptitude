import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const activateSim = async (simNumber) => {
  return await axios.post(`${API_URL}/sims/activate`, { simNumber });
};

export const deactivateSim = async (simNumber) => {
  return await axios.post(`${API_URL}/sims/deactivate`, { simNumber });
};

export const getSimDetails = async (simNumber) => {
  return await axios.get(`${API_URL}/sims/sim-details/${simNumber}`);
};
