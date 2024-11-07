function makeSummaryFormReadonly() {
    const inputs = document.querySelectorAll('.datetime-input, .diagnosis-input, .treatment-input, .surgeries-input');
    inputs.forEach(input => {
        input.setAttribute('readonly', true);
    });

    document.getElementById('dischargeInputHeader').innerText = 'View Mode';

    const cardInput = document.querySelector('.discharge-card-input'); // Assuming this as the main card section
    cardInput.classList.remove('card-input-yellow', 'card-input-green');
    cardInput.classList.add('card-input-blue'); // View mode color

    document.getElementById('summarySaveBtn').style.display = 'none';
    document.getElementById('editSubmitSummary').style.display = 'none';
    document.getElementById('summaryCancelBtn').style.display = 'none';

    document.getElementById('backToInputButtonSummary').style.display = 'block';
}

function enterSummaryEditMode() {
    const inputs = document.querySelectorAll('.datetime-input, .diagnosis-input, .treatment-input, .surgeries-input');
    inputs.forEach(input => {
        input.removeAttribute('readonly');
    });

    document.getElementById('dischargeInputHeader').innerText = 'Edit Mode';

    const cardInput = document.querySelector('.discharge-card-input');
    cardInput.classList.remove('card-input-blue', 'card-input-green');
    cardInput.classList.add('card-input-yellow');

    document.getElementById('summarySaveBtn').style.display = 'none';
    document.getElementById('editSubmitSummary').style.display = 'block';
    document.getElementById('summaryCancelBtn').style.display = 'none';
    document.getElementById('backToInputButtonSummary').style.display = 'block';
}
function showSummaryInputMode() {
    const form = document.getElementById('epDischargeForm');

    // Reset form action to store data
    form.action = '/emergency/ep-discharge/store';  // Set action to store route

    // Remove the hidden _method input for PATCH if it exists
    const methodInput = document.getElementById('_method');
    if (methodInput) {
        methodInput.remove(); // Remove _method so it submits as POST
    }

    // Target specific input fields by ID
    document.getElementById('summary-date-input').removeAttribute('readonly');
    document.getElementById('summary-time-input').removeAttribute('readonly');
    document.getElementById('summaryInput').removeAttribute('readonly');
    document.getElementById('followUpInput').removeAttribute('readonly');
    document.getElementById('addNotesInput').removeAttribute('readonly');

    // Clear fields for new input
    document.getElementById('summary-date-input').value = '';
    document.getElementById('summary-time-input').value = '';
    document.getElementById('summaryInput').value = '';
    document.getElementById('followUpInput').value = '';
    document.getElementById('addNotesInput').value = '';

    // Change header text back to "Input Mode"
    document.getElementById('dischargeInputHeader').innerText = 'Input Mode';

    // Change card-input border color to green (Input Mode)
    const cardInput = document.querySelector('.discharge-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.add('card-input-green');    // Add green for Input Mode

    // Show relevant buttons and hide others
    document.getElementById('summarySaveBtn').style.display = 'block'; // Show Save button
    document.getElementById('editSubmitSummary').style.display = 'none'; // Hide Save Changes button
    document.getElementById('summaryCancelBtn').style.display = 'block'; // Show Print button
    document.getElementById('backToInputButtonSummary').style.display = 'none'; // Hide Back to Input Mode button
}

function populateFormSummary(discharge) {
    // Set form action dynamically to the update route
    const form = document.getElementById('epDischargeForm');
    form.action = `/emergency/ep-discharge/update/${discharge.ep_discharge_id}`;

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
    document.getElementById('summary-date-input').value = discharge.ep_discharge_date;
    document.getElementById('summary-time-input').value = convertTo24Hour(discharge.ep_discharge_time);
    document.getElementById('summaryInput').value = discharge.ep_discharge_summary;
    document.getElementById('followUpInput').value = discharge.ep_discharge_instruction;
    document.getElementById('addNotesInput').value = discharge.ep_discharge_note;
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

function populateFormViewSummary(discharge) {
    //
    document.getElementById('summary-date-input').value = discharge.ep_discharge_date;
    document.getElementById('summary-time-input').value = convertTo24Hour(discharge.ep_discharge_time);
    document.getElementById('summaryInput').value = discharge.ep_discharge_summary;
    document.getElementById('followUpInput').value = discharge.ep_discharge_instruction;
    document.getElementById('addNotesInput').value = discharge.ep_discharge_note;
}


function dischargeToggleDivs() {
    const dischargeDiv = document.getElementById("dischargeDiv");
    const dischargeMainDiv = document.getElementById("dischargeMainDiv");

    // Check if the sidebar is collapsed
    if (dischargeDiv.classList.contains("collapsed")) {
        // Show the sidebar
        dischargeDiv.classList.remove("collapsed");

        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
            dischargeDiv.style.display = "block"; // Make it visible
        });

        // Adjust mainDiv width
        dischargeMainDiv.classList.remove("col-xl-12");
        dischargeMainDiv.classList.add("col-xl-8");
    } else {
        // Hide the sidebar
        dischargeDiv.classList.add("collapsed");

        // Delay before setting display to none
        setTimeout(() => {
            dischargeDiv.style.display = "none"; // Hide it
        }, 100); // Match this with your CSS transition timing

        // Expand mainDiv to col-xl-12
        dischargeMainDiv.classList.remove("col-xl-8");
        dischargeMainDiv.classList.add("col-xl-12");
    }
}

function summaryToggleLogs() {
    var logsSection = document.getElementById('dischargeLogsSection');
    var vitalSignsTable = document.getElementById('dischargeTableContainer');

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

