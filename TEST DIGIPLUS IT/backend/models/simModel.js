const mongoose = require('mongoose');

const simSchema = new mongoose.Schema({
  simNumber: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  activationDate: { type: Date },
});

module.exports = mongoose.model('Sim', simSchema);
