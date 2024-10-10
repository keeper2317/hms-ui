let remarks = [];
// Normal ranges
const normalRanges = {
    bp: "Normal BP: 90/60 to 120/80 mmHg",
    hr: "Normal HR: 60 to 100 bpm",
    pr: "Normal PR: 60 to 100 bpm",
    temp: "Normal Temp: 36.1 to 37.2 °C",
    o2: "Normal O2Sat: 95% to 100%",
    painScale: "Pain Scale: 0 (no pain) to 10 (worst pain)",
    respRate: "Normal Resp Rate: 12 to 20 breaths/min",
    bmi: "Normal BMI: 18.5 to 24.9"
};

// Function to validate input
function validateInput(input, type) {
    let value = input.value.trim();
    let messageElement = document.getElementById(`${type}Message`);
    messageElement.style.display = "none"; // Reset message display

    remarks = remarks.filter(remark => !remark.startsWith(type.toUpperCase()));

    // Regular expression for validating input characters
    const regex = /^[0-9/.% -]+$/; // Allow decimal points for temp and o2

    // Check for invalid characters
    if (!regex.test(value)) {
        messageElement.textContent = `Invalid input. Please enter numbers, "/" or "-" only.`;
        messageElement.style.display = "block";
        return false;
    }

    // Check for ranges
    let isValid = true;
    const numberValue = parseFloat(value); // Use parseFloat for all types, including temp

    if (isNaN(numberValue)) {
        messageElement.textContent = `Please enter a valid number for ${type.toUpperCase()}.`;
        messageElement.style.display = "block";
        return false;
    }

    // Validate based on type
    switch (type) {
        case 'bp':
            const values = value.split('/');
            if (values.length !== 2) {
                messageElement.textContent = `Invalid BP format.`;
                messageElement.style.display = "block";
                return false;
            }
            const systolic = parseInt(values[0]);
            const diastolic = parseInt(values[1]);
            if (isNaN(systolic) || isNaN(diastolic)) {
                messageElement.textContent = `Please enter valid numbers for BP.`;
                messageElement.style.display = "block";
                return false;
            }
            if (systolic < 90 || systolic > 120 || diastolic < 60 || diastolic > 80) {
                messageElement.textContent = `BP is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`BP is not normal.`);
                isValid = false;
            } else {
                remarks.push(`BP is normal.`);
            }
            break;

        case 'respRate':
            if (numberValue < 12 || numberValue > 20) {
                messageElement.textContent = `Resp Rate is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`Resp Rate is not normal.`);
                isValid = false;
            } else {
                remarks.push(`Resp Rate is normal.`);
            }
            updateRespPattern(numberValue); // Update respiratory pattern based on rate
            break;

            case 'weight':
                // Check if the input is a valid number (allowing decimals)
                if (isNaN(numberValue)) {
                    messageElement.textContent = `Please enter a valid number for Weight.`;
                    messageElement.style.display = "block";
                    isValid = false;
                }
                break;
            
            case 'height':
                // Check if the input is a valid number (allowing decimals)
                if (isNaN(numberValue)) {
                    messageElement.textContent = `Please enter a valid number for Height.`;
                    isValid = false;
                }
                break;

        case 'bmi':
            if (numberValue < 18.5 || numberValue > 24.9) {
                messageElement.textContent = `BMI is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`BMI is not normal.`);
                isValid = false;
            } else {
                remarks.push(`BMI is normal.`);
            }
            break;

        case 'temp':
            if (numberValue < 36.1 || numberValue > 37.2) {
                messageElement.textContent = `Temp is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`Temp is not normal.`);
                isValid = false;
            } else {
                remarks.push(`Temp is normal.`);
            }
            break;

        case 'o2':
            if (numberValue < 95 || numberValue > 100) {
                messageElement.textContent = `O2Sat is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`O2Sat is not normal.`);
                isValid = false;
            } else {
                remarks.push(`O2Sat is normal.`);
            }
            break;

        case 'painScale':
            if (numberValue < 0 || numberValue > 10) {
                messageElement.textContent = `Pain Scale is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`Pain Scale is not normal.`);
                isValid = false;
            } else {
                remarks.push(`Pain Scale is normal.`);
            }
            break;

        default:
            if (numberValue < 60 || numberValue > 100) {
                messageElement.textContent = `${type.toUpperCase()} is not normal.`;
                messageElement.style.display = "block";
                remarks.push(`${type.toUpperCase()} is not normal.`);
                isValid = false;
            } else {
                remarks.push(`${type.toUpperCase()} is normal.`);
            }
            break;
    }

    // Hide message if valid
    if (isValid) {
        messageElement.style.display = "none";
    } else {
        messageElement.style.display = "block";
    }

    // Update remarks input with combined messages
    const remarksInput = document.getElementById('remarksInput');
    remarksInput.value = remarks.join(", ")+ "\n\nNote: "; // Combine messages into one string

    return isValid;
}

function clearRemarks() {
    remarks = []; // Reset the remarks array
    document.getElementById('remarksInput').value = ''; // Clear the remarks input field
}

// Function to calculate BMI
function calculateBMI() {
    const weightInput = document.getElementById('weightInput');
    const heightInput = document.getElementById('heightInput');
    const bmiInput = document.getElementById('bmiInput');

    const weight = parseFloat(weightInput.value.trim());
    const height = parseFloat(heightInput.value.trim());

    if (!isNaN(weight) && !isNaN(height) && height > 0) {
        const heightInMeters = height / 100; // Convert height from cm to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); // Calculate BMI
        bmiInput.value = bmi; // Set BMI value to the input field
        validateInput(bmiInput, 'bmi'); // Validate the BMI input
    } else {
        bmiInput.value = ''; // Clear BMI input if weight or height is invalid
    }
}

// Function to update respiratory pattern based on respiratory rate
function updateRespPattern(respRate) {
    const respPatternInput = document.getElementById('respPatternInput');
    let respPattern = '';

    if (respRate < 12) {
        respPattern = 'Bradypnea';
    } else if (respRate >= 12 && respRate <= 20) {
        respPattern = 'Normal';
    } else if (respRate > 20) {
        respPattern = 'Tachypnea';
    }

    respPatternInput.value = respPattern; // Set respiratory pattern value
}


function toggleTooltip() {
    const tooltip = document.getElementById('tooltip');
    const isVisible = tooltip.style.display === 'block';
    tooltip.style.display = isVisible ? 'none' : 'block';
}


window.addEventListener('click', function(event) {
    const tooltip = document.getElementById('tooltip');
    const normalRangesLabel = document.getElementById('normalRanges');
    if (!normalRangesLabel.contains(event.target) && !tooltip.contains(event.target)) {
        tooltip.style.display = 'none'; // Hide tooltip if clicked outside
    }
});

function setCurrentDate() {
    const dateInput = document.getElementById('datetime-input');
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    dateInput.value = formattedDate;
}

// Function to set the current time
function setCurrentTime() {
    const timeInput = document.getElementById('datetime-input-time'); // Update to use a different ID for time
    const now = new Date();
    const formattedTime = now.toTimeString().split(' ')[0].substring(0, 5); // Format: HH:MM
    timeInput.value = formattedTime;
}

function sortTable(columnIndex) {
    const table = document.getElementById("vitalSignsTable");
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    const isAsc = table.getAttribute('data-sort-dir') === 'asc';

    rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[columnIndex].textContent;
        const cellB = rowB.querySelectorAll('td')[columnIndex].textContent;
        
        // Parse the date from the string
        const dateA = new Date(cellA);
        const dateB = new Date(cellB);
        
        // Handle NaN for invalid dates
        const comparison = isNaN(dateA) || isNaN(dateB) ? 0 : dateA - dateB;

        return isAsc ? comparison : -comparison;
    });

    // Append sorted rows back to the tbody
    table.querySelector('tbody').append(...rows);
    // Toggle sort direction
    table.setAttribute('data-sort-dir', isAsc ? 'desc' : 'asc');
}


// Event listeners for input validation and BMI calculation
window.onload = function() {
    setCurrentDate();
    setCurrentTime();


    document.getElementById('weightInput').addEventListener('input', function() {
        validateInput(this, 'weight');
        calculateBMI(); // Calculate BMI whenever weight changes
    });

    document.getElementById('heightInput').addEventListener('input', function() {
        validateInput(this, 'height');
        calculateBMI(); // Calculate BMI whenever height changes
    });

    document.getElementById('bpInput').addEventListener('input', function() {
        validateInput(this, 'bp');
    });

    document.getElementById('hrInput').addEventListener('input', function() {
        validateInput(this, 'hr');
    });

    document.getElementById('prInput').addEventListener('input', function() {
        validateInput(this, 'pr');
    });

    document.getElementById('tempInput').addEventListener('input', function() {
        validateInput(this, 'temp');
    });

    document.getElementById('o2Input').addEventListener('input', function() {
        validateInput(this, 'o2');
    });

    document.getElementById('painScaleInput').addEventListener('input', function() {
        validateInput(this, 'painScale');
    });

    document.getElementById('respRateInput').addEventListener('input', function() {
        validateInput(this, 'respRate');
    });

    document.getElementById('bmiInput').addEventListener('input', function() {
        validateInput(this, 'bmi');
    });

    

    const tooltip = document.getElementById('tooltip');
    const normalRangesLabel = document.getElementById('normalRanges');

    // Function to toggle tooltip visibility
    function toggleTooltip() {
        const isVisible = tooltip.style.display === 'block';
        tooltip.style.display = isVisible ? 'none' : 'block';
    }

    // Event listener for tooltip toggle on label click
    normalRangesLabel.addEventListener('click', toggleTooltip);

    // Optional: Hide tooltip when clicking outside
    window.addEventListener('click', function(event) {
        if (!normalRangesLabel.contains(event.target) && !tooltip.contains(event.target)) {
            tooltip.style.display = 'none'; // Hide tooltip if clicked outside
        }
    });

    // Optional: Show tooltip on hover
    normalRangesLabel.addEventListener('mouseover', function() {
        tooltip.style.display = 'block';
    });
    normalRangesLabel.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });



};



