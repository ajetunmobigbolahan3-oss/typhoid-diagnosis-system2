const classifySeverity = require('../utils/severityClassifier');

function diagnoseTyphoid(data) {
    const { feverDays, symptoms } = data;

    let suspected = false;

    if (feverDays >= 3 && symptoms.includes("abdominal pain")) {
        suspected = true;
    }

    const severity = classifySeverity(symptoms, feverDays);

    return {
        suspectedTyphoid: suspected,
        severity,
        recommendations: getRecommendations(severity)
    };
}

function getRecommendations(severity) {
    if (severity === "Severe") {
        return {
            action: "Immediate hospital care required",
            treatment: "IV antibiotics",
        };
    }

    if (severity === "Moderate") {
        return {
            action: "Medical supervision required",
            treatment: "Cefixime or Azithromycin"
        };
    }

    return {
        action: "Outpatient care",
        treatment: "Azithromycin or Ciprofloxacin"
    };
}

module.exports = diagnoseTyphoid;
