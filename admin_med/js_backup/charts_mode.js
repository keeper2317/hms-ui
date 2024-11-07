



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

function enterEditMode() {
    const inputs = document.querySelectorAll('.step-form-horizontal input, .step-form-horizontal textarea');
    inputs.forEach(input => {
        input.removeAttribute('readonly');
    });

    const selects = document.querySelectorAll('.step-form-horizontal select');
    selects.forEach(select => {
        select.removeAttribute('disabled');
    });

    // Change header text to "Edit Mode"
    document.getElementById('inputHeader').innerText = 'Edit Mode';

    // Change card-input border color to yellow
    const cardInput = document.querySelector('.card-input');
    cardInput.classList.remove('card-input-blue'); // Remove blue if in view mode
    cardInput.classList.add('card-input-yellow'); // Add yellow class for edit mode

    // Hide the "Save" button and show "Save Changes" button
    document.getElementById('save-btn').style.display = 'none'; // Hide the "Save" button
    document.getElementById('editSubmit').style.display = 'block'; // Show "Save Changes" button

    // Hide the Close button and show the Back to Input Mode button
    document.querySelector('.btn-secondary.btn.sweet-confirm').style.display = 'none'; // Hide the Close button
    document.getElementById('backToInputButton').style.display = 'block'; // Show the Back to Input Mode button
}

function showInputMode() {
    const form = document.getElementById('vitalSignsForm');

    // Reset form action to store data
    form.action = '/emergency/vital-signs/store';  // Set action to store route

    // Remove the hidden _method input for PATCH if it exists
    const methodInput = document.getElementById('_method');
    if (methodInput) {
        methodInput.remove(); // Remove _method so it submits as POST
    }

    // Enable all inputs and selects for data input
    const inputs = document.querySelectorAll('.step-form-horizontal input, .step-form-horizontal textarea');
    inputs.forEach(input => {
        input.removeAttribute('readonly');
    });

    const selects = document.querySelectorAll('.step-form-horizontal select');
    selects.forEach(select => {
        select.removeAttribute('disabled');
    });

    // Change header text back to "Input Mode"
    document.getElementById('inputHeader').innerText = 'Input Mode';

    // Change card-input border color to green
    const cardInput = document.querySelector('.card-input');
    cardInput.classList.remove('card-input-blue'); // Remove blue if in view mode
    cardInput.classList.remove('card-input-yellow'); // Remove yellow if in edit mode
    cardInput.classList.add('card-input-green'); // Add green class for input mode

    // Show the Close and Save buttons
    document.querySelector('.btn-secondary.btn.sweet-confirm').style.display = 'block'; // Show Close button
    document.getElementById('save-btn').style.display = 'block'; // Show Save button again

    // Hide the Save Changes button
    document.getElementById('editSubmit').style.display = 'none'; // Hide Save Changes button

    // Hide the Back to Input Mode button
    document.getElementById('backToInputButton').style.display = 'none'; // Hide Back to Input Mode button

    // Clear input fields except for date, time, and hidden inputs
    const formInputs = form.querySelectorAll('input');
    formInputs.forEach(function (input) {
        if (input.type !== 'date' && input.type !== 'time' && input.type !== 'hidden') {
            input.value = ''; // Clear the input value
        }
    });

    // Clear textarea fields if applicable (e.g., remarks)
    const textareas = form.querySelectorAll('textarea');
    textareas.forEach(function (textarea) {
        textarea.value = ''; // Clear textarea content
    });
}





function populateForm(vitals) {
    // Set form action dynamically to the update route
    const form = document.getElementById('vitalSignsForm');
    form.action = `/emergency/vital-signs/update/${vitals.vital_signs_id}`;

    let methodInput = document.getElementById('_method');
    if (!methodInput) {
        methodInput = document.createElement('input');
        methodInput.type = 'hidden';
        methodInput.name = '_method';
        methodInput.id = '_method';
        form.appendChild(methodInput);
    }
    methodInput.value = 'PATCH'; // Ensure the form method is PATCH for update

    // Populate the form fields with the vital signs data
    document.getElementById('datetime-input').value = vitals.diagnosis_date;
    document.getElementById('datetime-input-time').value = convertTo24Hour(vitals.diagnosis_time);
    document.getElementById('bpInput').value = vitals.B_P;
    document.getElementById('hrInput').value = vitals.heart_rate;
    document.getElementById('prInput').value = vitals.pulse_rate;
    document.getElementById('tempInput').value = vitals.temperature;
    document.getElementById('o2Input').value = vitals.oxygen_saturation;
    document.getElementById('painScaleInput').value = vitals.pain_scale;
    document.getElementById('respRateInput').value = vitals.respiratory_rate;
    document.getElementById('respPatternInput').value = vitals.respiratory_pattern;
    document.getElementById('weightInput').value = vitals.weight;
    document.getElementById('heightInput').value = vitals.height;
    document.getElementById('bmiInput').value = vitals.bmi;
    document.getElementById('remarksInput').value = vitals.vitals_note;
}

// Helper function to convert 12-hour time to 24-hour format
function convertTo24Hour(time) {
    let [hours, minutes] = time.split(':');
    let period = minutes.slice(-2); // Extract AM or PM
    minutes = minutes.slice(0, -2).trim(); // Remove AM/PM from minutes
    hours = parseInt(hours);

    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    // Format hours and minutes to HH:MM format
    hours = hours < 10 ? '0' + hours : hours;
    return `${hours}:${minutes}`;
}

function populateFormView(vitals) {
    // Populate the form fields with the vital signs data
    document.getElementById('datetime-input').value = vitals.diagnosis_date;
    document.getElementById('datetime-input-time').value = convertTo24Hour(vitals.diagnosis_time);
    document.getElementById('bpInput').value = vitals.B_P;
    document.getElementById('hrInput').value = vitals.heart_rate;
    document.getElementById('prInput').value = vitals.pulse_rate;
    document.getElementById('tempInput').value = vitals.temperature;
    document.getElementById('o2Input').value = vitals.oxygen_saturation;
    document.getElementById('painScaleInput').value = vitals.pain_scale;
    document.getElementById('respRateInput').value = vitals.respiratory_rate;
    document.getElementById('respPatternInput').value = vitals.respiratory_pattern;
    document.getElementById('weightInput').value = vitals.weight;
    document.getElementById('heightInput').value = vitals.height;
    document.getElementById('bmiInput').value = vitals.bmi;
    document.getElementById('remarksInput').value = vitals.vitals_note;
}


function toggleLogs() {
    var logsSection = document.getElementById('logsSection');
    var vitalSignsTable = document.getElementById('vitalSignsTableContainer');

    // Check if logs are currently visible
    if (logsSection.style.display === "none" || logsSection.style.display === "") {
        logsSection.style.display = "block"; // Show logs
        vitalSignsTable.style.display = "none"; // Hide the table
        document.getElementById('viewLogs').innerText = "View Vital Signs"; // Update label text
    } else {
        logsSection.style.display = "none"; // Hide logs
        vitalSignsTable.style.display = "block"; // Show the table
        document.getElementById('viewLogs').innerText = "View Logs"; // Update label text
    }
}
