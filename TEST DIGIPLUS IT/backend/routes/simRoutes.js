const express = require('express');
const { activateSim, deactivateSim, getSimDetails } = require('../controllers/simController');
const router = express.Router();

router.post('/activate', activateSim);
router.post('/deactivate', deactivateSim);
router.get('/sim-details/:simNumber', getSimDetails);

module.exports = router;
