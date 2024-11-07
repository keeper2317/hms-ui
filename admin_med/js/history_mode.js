function makeHistoryFormReadonly() {
    const inputs = document.querySelectorAll('.datetime-input, .diagnosis-input, .treatment-input, .surgeries-input, .medication-input');
    inputs.forEach(input => {
        input.setAttribute('readonly', true);
    });

    // Change header text to "View Mode"
    document.getElementById('historyInputHeader').innerText = 'View Mode';

    // Change card-input border color to blue (View Mode)
    const cardInput = document.querySelector('.history-card-input');
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.remove('card-input-green');  // Remove green (Input Mode)
    cardInput.classList.add('card-input-blue');      // Add blue for View Mode

    // Hide buttons and show the relevant ones
    document.getElementById('historySaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitHistory').style.display = 'none'; // Hide Save Changes button
    document.getElementById('historyCancelBtn').style.display = 'none'; // Hide Clear button

    // Show the Back to Input Mode button
    document.getElementById('backToInputButtonHistory').style.display = 'block'; // Show Back to Input Mode button
}

function enterHistoryEditMode() {
    const inputs = document.querySelectorAll('.datetime-input, .diagnosis-input, .treatment-input, .surgeries-input, .medication-input');
    inputs.forEach(input => {
        input.removeAttribute('readonly');
    });

    // Change header text to "Edit Mode"
    document.getElementById('historyInputHeader').innerText = 'Edit Mode';

    // Change card-input border color to yellow (Edit Mode)
    const cardInput = document.querySelector('.history-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-green'); // Remove green (Input Mode)
    cardInput.classList.add('card-input-yellow');   // Add yellow for Edit Mode

    // Hide buttons and show the relevant ones
    document.getElementById('historySaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitHistory').style.display = 'block'; // Show Save Changes button
    document.getElementById('historyCancelBtn').style.display = 'none'; // Hide Clear button
    document.getElementById('backToInputButtonHistory').style.display = 'block'; // Show Back to Input Mode button
}

function showHistoryInputMode() {
    const form = document.getElementById('epHistoryForm');

    // Reset form action to store data
    form.action = '/emergency/ep-medical-history/store';  // Set action to store route

    // Remove the hidden _method input for PATCH if it exists
    const methodInput = document.getElementById('_method');
    if (methodInput) {
        methodInput.remove(); // Remove _method so it submits as POST
    }

    const inputs = document.querySelectorAll('.diagnosis-input, .treatment-input, .surgeries-input, .medication-input');
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
        input.value = '';  // Clear fields for new input, except date and time
    });

    // Change header text back to "Input Mode"
    document.getElementById('historyInputHeader').innerText = 'Input Mode';

    // Change card-input border color to green (Input Mode)
    const cardInput = document.querySelector('.history-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.add('card-input-green');    // Add green for Input Mode

    // Show relevant buttons and hide others
    document.getElementById('historySaveBtn').style.display = 'block'; // Show Save button
    document.getElementById('editSubmitHistory').style.display = 'none'; // Hide Save Changes button
    document.getElementById('historyCancelBtn').style.display = 'block'; // Show Clear button
    document.getElementById('backToInputButtonHistory').style.display = 'none'; // Hide Back to Input Mode button

    // Optionally, you can also call enterHistoryEditMode to switch to edit mode after clearing fields
    // enterHistoryEditMode();
}


function populateFormHistory(history) {
    // Set form action dynamically to the update route
    const form = document.getElementById('epHistoryForm');
    form.action = `/emergency/ep-medical-history/update/${history.ep_medical_history_id}`;

    let methodInput = document.getElementById('_method');
    if (!methodInput) {
        methodInput = document.createElement('input');
        methodInput.type = 'hidden';
        methodInput.name = '_method';
        methodInput.id = '_method';
        form.appendChild(methodInput);
    }
    methodInput.value = 'PATCH'; // Ensure the form method is PATCH for update

    //
    document.getElementById('history-date-input').value = history.ep_medical_history_date;
    document.getElementById('history-time-input').value = convertTo24Hour(history.ep_medical_history_time);
    document.getElementById('diagnosisInput').value = history.ep_medical_history_diagnosis;
    document.getElementById('treatmentInput').value = history.ep_medical_history_treatment;
    document.getElementById('surgeriesInput').value = history.ep_medical_history_surgery;
    document.getElementById('medicationInput').value = history.ep_medical_history_medications;
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

function populateFormViewHistory(history) {
    //
    document.getElementById('history-date-input').value = history.ep_medical_history_date;
    document.getElementById('history-time-input').value = convertTo24Hour(history.ep_medical_history_time);
    document.getElementById('diagnosisInput').value = history.ep_medical_history_diagnosis;
    document.getElementById('treatmentInput').value = history.ep_medical_history_treatment;
    document.getElementById('surgeriesInput').value = history.ep_medical_history_surgery;
    document.getElementById('medicationInput').value = history.ep_medical_history_medications;
}


function historyToggleLogs() {
    var logsSection = document.getElementById('historyLogsSection');
    var vitalSignsTable = document.getElementById('historyTableContainer');

    // Check if logs are currently visible
    if (logsSection.style.display === "none" || logsSection.style.display === "") {
        logsSection.style.display = "block"; // Show logs
        vitalSignsTable.style.display = "none"; // Hide the table
        document.getElementById('viewLogs').innerText = "View Medical History"; // Update label text
    } else {
        logsSection.style.display = "none"; // Hide logs
        vitalSignsTable.style.display = "block"; // Show the table
        document.getElementById('viewLogs').innerText = "View Logs"; // Update label text
    }
}

function historyToggleDivs() {
    const historyDiv = document.getElementById("historyDiv");
    const mainDiv = document.getElementById("mainDiv");

    // Check if the sidebar is collapsed
    if (historyDiv.classList.contains("collapsed")) {
        // Show the sidebar
        historyDiv.classList.remove("collapsed");
        
        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
            historyDiv.style.display = "block"; // Make it visible
        });

        // Adjust mainDiv width
        mainDiv.classList.remove("col-xl-12");
        mainDiv.classList.add("col-xl-8");
    } else {
        // Hide the sidebar
        historyDiv.classList.add("collapsed");

        // Delay before setting display to none
        setTimeout(() => {
            historyDiv.style.display = "none"; // Hide it
        }, 100); // Match this with your CSS transition timing

        // Expand mainDiv to col-xl-12
        mainDiv.classList.remove("col-xl-8");
        mainDiv.classList.add("col-xl-12");
    }
}
