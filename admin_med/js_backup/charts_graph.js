document.addEventListener('DOMContentLoaded', function() {
    let vitalSignsChart; // Variable to hold the chart instance

    document.getElementById('viewGraph-btn').addEventListener('click', function() {
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
            var o2SatData = [];
            var psData = [];
            var rrData = [];

            // Collect data from the table
            rows.forEach(function(row) {
                var cells = row.querySelectorAll('td');
                if (cells.length > 0) {
                    dates.push(cells[0].innerText); // Diagnosis Date
                    bpData.push(parseFloat(cells[1].innerText) || 0); // BP
                    hrData.push(parseFloat(cells[2].innerText) || 0); // HR
                    tempData.push(parseFloat(cells[3].innerText) || 0); // Temp
                    o2SatData.push(parseFloat(cells[4].innerText) || 0); // O2Sat
                    psData.push(parseFloat(cells[5].innerText) || 0); // Pain Scale
                    rrData.push(parseFloat(cells[6].innerText) || 0); // Respiratory Rate
                }
            });

            // Check if the chart already exists; if so, destroy it
            if (vitalSignsChart) {
                vitalSignsChart.destroy();
            }

            // Create the chart
            var ctx = document.getElementById('vitalSignsChart').getContext('2d');
            vitalSignsChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: 'Blood Pressure (BP)',
                            data: bpData,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            fill: false
                        },
                        {
                            label: 'Heart Rate (HR)',
                            data: hrData,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            fill: false
                        },
                        {
                            label: 'Temperature (Temp)',
                            data: tempData,
                            borderColor: 'rgba(255, 206, 86, 1)',
                            fill: false
                        },
                        {
                            label: 'O2 Saturation (O2Sat)',
                            data: o2SatData,
                            borderColor: 'rgba(153, 102, 255, 1)',
                            fill: false
                        },
                        {
                            label: 'Pain Scale (PS)',
                            data: psData,
                            borderColor: 'rgba(255, 159, 64, 1)',
                            fill: false
                        },
                        {
                            label: 'Respiratory Rate (RR)',
                            data: rrData,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            fill: false
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
