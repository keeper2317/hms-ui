



document.addEventListener('DOMContentLoaded', function () {
    let vitalSignsChart; // Variable to hold the chart instance

    document.getElementById('viewGraph-btn').addEventListener('click', function () {
        // Check if the button text is "View Graph"
        if (this.innerText === 'View Graph') {
            // Get the table body
            var tbody = document.querySelector('#vitalSignsTable tbody');
            var rows = tbody.querySelectorAll('tr');

            // Arrays to hold the data
            var dates = [];
            var bpData = [];
            var hrData = [];
            var tempData = [];
            var rrData = [];

            // Collect data from the table
            rows.forEach(function (row) {
                var cells = row.querySelectorAll('td');
                if (cells.length > 0) {
                    dates.push(cells[0].innerText); // Diagnosis Date
                    bpData.push(parseFloat(cells[1].dataset.bp) || 0); // BP from data-bp attribute
                    hrData.push(parseFloat(cells[2].dataset.hr) || 0); // HR from data-hr attribute
                    tempData.push(parseFloat(cells[3].dataset.temp) || 0); // Temp from data-temp attribute
                    rrData.push(parseFloat(cells[6].dataset.rr) || 0); // Respiratory Rate from data-rr attribute
                }
            });

            // Check if the chart already exists; if so, destroy it
            if (vitalSignsChart) {
                vitalSignsChart.destroy();
            }

            // Create the chart
            var ctx = document.getElementById('vitalSignsChart').getContext('2d');
            vitalSignsChart = new Chart(ctx, {
                data: {
                    labels: dates, // Diagnosis dates
                    datasets: [
                        // Heart Rate (Horizontal Bar)
                        {
                            type: 'bar',
                            label: 'Heart Rate (HR)',
                            data: hrData,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            indexAxis: 'y' // Horizontal histogram
                        },
                        // Respiratory Rate (Horizontal Bar)
                        {
                            type: 'bar',
                            label: 'Respiratory Rate (RR)',
                            data: rrData,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            indexAxis: 'y' // Horizontal histogram
                        },
                        // Temperature (Horizontal Line)
                        {
                            type: 'line',
                            label: 'Temperature (°C)',
                            data: tempData,
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 2,
                            fill: false,
                            indexAxis: 'y' // Horizontal line graph
                        },
                        // Blood Pressure (Vertical Bar)
                        {
                            type: 'bar',
                            label: 'Blood Pressure (BP)',
                            data: bpData,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            indexAxis: 'x' // Vertical bar (default)
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Show the graph and hide the table
            document.getElementById('vitalSignsTable').style.display = 'none';
            document.getElementById('vitalSignsChart').style.display = 'block';

            // Change button text to "Back"
            this.innerText = 'Back';
        } else {
            // If the button text is "Back", hide the graph and show the table
            document.getElementById('vitalSignsTable').style.display = 'table'; // Ensure table displays as a table
            document.getElementById('vitalSignsChart').style.display = 'none';

            // Change button text back to "View Graph"
            this.innerText = 'View Graph';
        }
    });
});





function makeFormReadonly() {
    const inputs = document.querySelectorAll('.step-form-horizontal input, .step-form-horizontal textarea');
    inputs.forEach(input => {
        input.setAttribute('readonly', true);
    });

    const selects = document.querySelectorAll('.step-form-horizontal select');
    selects.forEach(select => {
        select.setAttribute('disabled', true);
    });

    // Change header text to "View Mode"
    document.getElementById('inputHeader').innerText = 'View Mode';

    // Change card-input border color to blue
    const cardInput = document.querySelector('.card-input');
    cardInput.classList.remove('card-input-yellow'); // Remove yellow if in edit mode
    cardInput.classList.remove('card-input-green'); // Remove yellow if in edit mode
    cardInput.classList.add('card-input-blue'); // Add blue class for view mode

    // Hide the Close and Save buttons
    document.querySelector('.btn-secondary.btn.sweet-confirm').style.display = 'none'; // Hide Close button
    document.querySelector('.btn-primary.ms-3').style.display = 'none'; // Hide Save button

    // Hide the Save Changes button
    document.getElementById('editSubmit').style.display = 'none'; // Hide Save Changes button

    // Show the Back to Input Mode button
    document.getElementById('backToInputButton').style.display = 'block';
}
