const express = require('express');
const router = express.Router();

const { diagnose } = require('../controllers/diagnosisController');

router.post('/diagnose', diagnose);

module.exports = router;
