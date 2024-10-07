const Sim = require('../models/simModel');

const activateSim = async (req, res) => {
  const { simNumber } = req.body;
  const sim = await Sim.findOne({ simNumber });
  if (!sim) return res.status(404).json({ message: 'SIM not found' });
  if (sim.status === 'active') return res.status(400).json({ message: 'SIM is already active' });

  sim.status = 'active';
  sim.activationDate = new Date();
  await sim.save();
  res.status(200).json(sim);
};

const deactivateSim = async (req, res) => {
  const { simNumber } = req.body;
  const sim = await Sim.findOne({ simNumber });
  if (!sim) return res.status(404).json({ message: 'SIM not found' });
  if (sim.status === 'inactive') return res.status(400).json({ message: 'SIM is already inactive' });

  sim.status = 'inactive';
  await sim.save();
  res.status(200).json(sim);
};

const getSimDetails = async (req, res) => {
  const { simNumber } = req.params;
  const sim = await Sim.findOne({ simNumber });
  if (!sim) return res.status(404).json({ message: 'SIM not found' });

  res.status(200).json(sim);
};

module.exports = { activateSim, deactivateSim, getSimDetails };
