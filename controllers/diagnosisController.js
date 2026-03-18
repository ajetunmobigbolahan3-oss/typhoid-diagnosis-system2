const diagnoseTyphoid = require('../services/diagnosisService');

exports.diagnose = (req, res) => {
    try {
        const result = diagnoseTyphoid(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
