document.addEventListener('DOMContentLoaded', function () {
    const vitalSignsRows = document.querySelectorAll('#vitalSignsTable tbody tr');

    vitalSignsRows.forEach(function (row) {
        // Get the values from the data attributes
        const bp = row.querySelector('[data-bp]').dataset.bp.split('/');
        const hr = parseInt(row.querySelector('[data-hr]').dataset.hr);
        const temp = parseFloat(row.querySelector('[data-temp]').dataset.temp);
        const o2 = parseInt(row.querySelector('[data-o2]').dataset.o2);
        const rr = parseInt(row.querySelector('[data-rr]').dataset.rr);

        // Check BP (Blood Pressure)
        if (bp.length === 2) {
            const systolic = parseInt(bp[0]);
            const diastolic = parseInt(bp[1]);
            if (systolic < 90 || systolic > 180 || diastolic > 120) {
                row.querySelector('[data-bp]').classList.add('text-danger');  // Critical (red)
            } else {
                row.querySelector('[data-bp]').classList.add('text-success'); // Normal (green)
            }
        }

        // Check HR (Heart Rate)
        if (hr < 50 || hr > 120) {
            row.querySelector('[data-hr]').classList.add('text-danger');  // Critical (red)
        } else {
            row.querySelector('[data-hr]').classList.add('text-success'); // Normal (green)
        }

        // Check Temp (Body Temperature)
        if (temp > 100.4 || temp < 97) {
            row.querySelector('[data-temp]').classList.add('text-danger');  // Critical (red)
        } else {
            row.querySelector('[data-temp]').classList.add('text-success'); // Normal (green)
        }

        // Check O2Sat (Oxygen Saturation)
        if (o2 < 90) {
            row.querySelector('[data-o2]').classList.add('text-danger');  // Critical (red)
        } else {
            row.querySelector('[data-o2]').classList.add('text-success'); // Normal (green)
        }

        // Check RR (Respiratory Rate)
        if (rr < 10 || rr > 30) {
            row.querySelector('[data-rr]').classList.add('text-danger');  // Critical (red)
        } else {
            row.querySelector('[data-rr]').classList.add('text-success'); // Normal (green)
        }
    });
});
