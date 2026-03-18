function classifySeverity(symptoms, feverDays) {
    if (symptoms.includes("confusion") || symptoms.includes("bleeding")) {
        return "Severe";
    }

    if (feverDays > 3 || symptoms.includes("weakness")) {
        return "Moderate";
    }

    return "Mild";
}

module.exports = classifySeverity;
