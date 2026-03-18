document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const feverDays = document.getElementById('feverDays').value;

    const selected = Array.from(document.getElementById('symptoms').selectedOptions)
        .map(opt => opt.value);

    const res = await fetch('http://localhost:5000/api/diagnose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feverDays, symptoms: selected })
    });

    const data = await res.json();

    document.getElementById('result').innerHTML = `
        <p><b>Suspected:</b> ${data.suspectedTyphoid}</p>
        <p><b>Severity:</b> ${data.severity}</p>
        <p><b>Action:</b> ${data.recommendations.action}</p>
        <p><b>Treatment:</b> ${data.recommendations.treatment}</p>
    `;
});
