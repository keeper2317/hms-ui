function viewGraph() {
    const tableContainer = document.getElementById('vitalSignsTableContainer');
    const chartContainer = document.getElementById('vitalSignsChartContainer');
    const bpCtx = document.getElementById('bpChart').getContext('2d');
    const hrRrCtx = document.getElementById('hrChart').getContext('2d'); // Combine Heart Rate and Respiration Rate charts
    const tempCtx = document.getElementById('tempChart').getContext('2d'); // Temperature chart

    // Clear previous chart data if it exists
    if (Chart.getChart("bpChart")) {
        Chart.getChart("bpChart").destroy(); // Destroy the previous BP chart instance
    }
    if (Chart.getChart("hrChart")) {
        Chart.getChart("hrChart").destroy(); // Destroy the previous HR and RR chart instance
    }
    if (Chart.getChart("tempChart")) {
        Chart.getChart("tempChart").destroy(); // Destroy the previous Temperature chart instance
    }

    // Prepare data arrays
    const labels = [];
    const bpData = []; // This will hold the actual blood pressure data
    const hrData = [];
    const rrData = [];
    const tempData = []; // This will hold the temperature data

    // Iterate through the last 3 rows in the table
    const table = document.getElementById('vitalSignsTable');
    const totalRows = table.rows.length;
    const startRow = Math.max(1, totalRows - 3); // Start from the last 3 rows, but skip header (row 0)

    for (let i = startRow; i < totalRows; i++) { // Loop only through the last 3 rows
        const row = table.rows[i];
        labels.push(row.cells[0].innerText); // Diagnosis Date

        // Blood Pressure
        const bp = row.cells[1].innerText !== 'N/A' ? row.cells[1].innerText : '0/0';
        bpData.push(bp);

        // Heart Rate and Respiration Rate
        hrData.push(row.cells[2].innerText !== 'N/A' ? parseFloat(row.cells[2].innerText) : 0);
        rrData.push(row.cells[6].innerText !== 'N/A' ? parseFloat(row.cells[6].innerText) : 0);

        // Temperature
        tempData.push(row.cells[3].innerText !== 'N/A' ? parseFloat(row.cells[3].innerText) : 0);
    }

    // Adjusted blood pressure data to include specific readings
    const bpReadings = bpData.map((bp, index) => {
        const values = bp ? bp.split('/').map(value => parseFloat(value)) : [0, 0]; // Convert to numeric values
        return {
            systolic: values[0],
            diastolic: values[1]
        };
    });

    // Blood Pressure Chart (Bar Chart for Systolic/Diastolic)
    new Chart(bpCtx, {
        type: 'bar',
        data: {
            labels: labels, // Use actual dates or other relevant data as labels
            datasets: [
                {
                    label: 'Systolic',
                    data: bpReadings.map(bp => bp.systolic), // Systolic values
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    categoryPercentage: 0.5,
                    barPercentage: 0.8,
                },
                {
                    label: 'Diastolic',
                    data: bpReadings.map(bp => bp.diastolic), // Diastolic values
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    categoryPercentage: 0.5,
                    barPercentage: 0.8,
                }
            ]
        },
        options: {
            responsive: false, // Set to false to respect canvas dimensions
            maintainAspectRatio: false, // Allows the chart to take the specified width and height
            layout: {
                padding: {
                    left: 5,
                    right: 5,
                    top: 5,
                    bottom: 5
                }
            },
            scales: {
                x: {
                    display: true,
                    ticks: {
                        autoSkip: false // Ensures all labels are shown if there is space
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value; // Keep y-axis labels as is
                        }
                    }
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: function(value, context) {
                        const systolic = context.dataset.label === 'Systolic' ? value : context.chart.data.datasets[0].data[context.dataIndex];
                        const diastolic = context.dataset.label === 'Diastolic' ? value : context.chart.data.datasets[1].data[context.dataIndex];
                        return `${systolic}/${diastolic}`; // Show 'systolic/diastolic'
                    },
                    color: '#000',
                    font: {
                        weight: 'bold'
                    }
                }
            }
        }
    });

    // Heart Rate and Respiration Rate Chart (Combined Bar Chart)
    new Chart(hrRrCtx, {
        type: 'bar',
        data: {
            labels: labels, // Use actual dates or other relevant data as labels
            datasets: [
                {
                    label: 'Heart Rate',
                    data: hrData,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1,
                    categoryPercentage: 0.5,
                    barPercentage: 0.8,
                },
                {
                    label: 'Respiration Rate',
                    data: rrData,
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    categoryPercentage: 0.5,
                    barPercentage: 0.8,
                }
            ]
        },
        options: {
            responsive: false, // Set to false to respect canvas dimensions
            maintainAspectRatio: false, // Allows the chart to take the specified width and height
            scales: {
                x: {
                    display: true,
                    ticks: {
                        autoSkip: false // Ensures all labels are shown if there is space
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value; // Keep y-axis labels as is
                        }
                    }
                }
            }
        }
    });

    // Temperature Chart (Line Chart)
    new Chart(tempCtx, {
        type: 'line',
        data: {
            labels: labels, // Use actual dates or other relevant data as labels
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: tempData,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.1 // Smooth curves
                }
            ]
        },
        options: {
            responsive: false, // Set to false to respect canvas dimensions
            maintainAspectRatio: false, // Allows the chart to take the specified width and height
            scales: {
                x: {
                    display: true,
                    ticks: {
                        autoSkip: false // Ensures all labels are shown if there is space
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value; // Keep y-axis labels as is
                        }
                    }
                }
            }
        }
    });

    // Toggle button visibility
    document.getElementById('viewGraphButton').style.display = 'none';
    document.getElementById('viewTableButton').style.display = 'inline-block';

    // Show the chart container and hide the table container
    chartContainer.style.display = 'block';
    tableContainer.style.display = 'none';

    isTableVisible = false; // Update the state
}

function viewTable() {
    // Toggle button visibility
    document.getElementById('viewGraphButton').style.display = 'inline-block';
    document.getElementById('viewTableButton').style.display = 'none';

    // Hide the chart container and show the table container
    document.getElementById('vitalSignsChartContainer').style.display = 'none';
    document.getElementById('vitalSignsTableContainer').style.display = 'block';

    isTableVisible = true; // Update the state
}
