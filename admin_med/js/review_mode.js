function makeReviewFormReadonly() {
    const inputs = document.querySelectorAll('.datetime-input, .diagnosis-input, .prognosis-input, .impairments-evaluation-input, .activity-restriction-input, .personal-factor-input, .environmental-factor-input');
    inputs.forEach(input => {
        input.setAttribute('readonly', true); // Make inputs read-only
    });

    // Change header text to "View Mode"
    document.getElementById('reviewInputHeader').innerText = 'View Mode';

    // Change card-input border color to blue (View Mode)
    const cardInput = document.querySelector('.review-card-input'); // Assuming the entire card body is treated as card input
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.remove('card-input-green');  // Remove green (Input Mode)
    cardInput.classList.add('card-input-blue');      // Add blue for View Mode

    // Hide buttons and show the relevant ones
    document.getElementById('reviewSaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitReview').style.display = 'none'; // Hide Save Changes button
    document.getElementById('reviewCancelBtn').style.display = 'none'; // Hide Clear button

    // Show the Back to Input Mode button
    document.getElementById('backToInputButtonReview').style.display = 'block'; // Show Back to Input Mode button
}

function enterReviewEditMode() {
    const inputs = document.querySelectorAll('.datetime-input, .diagnosis-input, .prognosis-input, .impairments-evaluation-input, .activity-restriction-input, .personal-factor-input, .environmental-factor-input');
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
    });

    // Change header text to "Edit Mode"
    document.getElementById('reviewInputHeader').innerText = 'Edit Mode';

    // Change card-input border color to yellow (Edit Mode)
    const cardInput = document.querySelector('.review-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-green'); // Remove green (Input Mode)
    cardInput.classList.add('card-input-yellow');   // Add yellow for Edit Mode

    // Hide buttons and show the relevant ones
    document.getElementById('reviewSaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitReview').style.display = 'block'; // Show Save Changes button
    document.getElementById('reviewCancelBtn').style.display = 'none'; // Hide Clear button
    document.getElementById('backToInputButtonReview').style.display = 'block'; // Show Back to Input Mode button
}

function showReviewInputMode() {
    const form = document.getElementById('doctorsReviewForm');

    // Reset form action to store data
    form.action = '/emergency/diagnosis-and-procedure/store';  // Set action to store route

    // Remove the hidden _method input for PATCH if it exists
    const methodInput = document.getElementById('_method');
    if (methodInput) {
        methodInput.remove(); // Remove _method so it submits as POST
    }

    const inputs = document.querySelectorAll('.diagnosis-input, .prognosis-input, .impairments-evaluation-input, .activity-restriction-input, .personal-factor-input, .environmental-factor-input'); // Only clear relevant inputs
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
        input.value = '';  // Clear fields for new input
    });

    // Change header text back to "Input Mode"
    document.getElementById('reviewInputHeader').innerText = 'Input Mode';

    // Change card-input border color to green (Input Mode)
    const cardInput = document.querySelector('.review-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.add('card-input-green');    // Add green for Input Mode

    // Show relevant buttons and hide others
    document.getElementById('reviewSaveBtn').style.display = 'block'; // Show Save button
    document.getElementById('editSubmitReview').style.display = 'none'; // Hide Save Changes button
    document.getElementById('reviewCancelBtn').style.display = 'block'; // Show Clear button
    document.getElementById('backToInputButtonReview').style.display = 'none'; // Hide Back to Input Mode button
}

function populateFormProcedure(procedure) {
    // Set form action dynamically to the update route
    const form = document.getElementById('doctorsReviewForm');
    form.action = `/emergency/diagnosis-and-procedure/update/${procedure.diagnosis_and_procedure_id}`;

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
    document.getElementById('diagnosis-date-input1').value = procedure.diagnosis_and_procedure_date;
    document.getElementById('diagnosis-time-input1').value = convertTo24Hour(procedure.diagnosis_and_procedure_time);
    document.getElementById('impairmentInput').value = procedure.impairment;
    document.getElementById('activityRestrictionInput').value = procedure.activity_restriction;
    document.getElementById('personalFactorInput').value = procedure.personal_factor;
    document.getElementById('environmentalFactorInput').value = procedure.environmental_factor;
    document.getElementById('diagnosisInput1').value = procedure.diagnosis;
    document.getElementById('prognosisInput').value = procedure.prognosis;
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

function populateFormViewProcedure(procedure) {
    //
    document.getElementById('diagnosis-date-input1').value = procedure.diagnosis_and_procedure_date;
    document.getElementById('diagnosis-time-input1').value = convertTo24Hour(procedure.diagnosis_and_procedure_time);
    document.getElementById('impairmentInput').value = procedure.impairment;
    document.getElementById('activityRestrictionInput').value = procedure.activity_restriction;
    document.getElementById('personalFactorInput').value = procedure.personal_factor;
    document.getElementById('environmentalFactorInput').value = procedure.environmental_factor;
    document.getElementById('diagnosisInput1').value = procedure.diagnosis;
    document.getElementById('prognosisInput').value = procedure.prognosis;
}

function reviewToggleLogs() {
    var logsSection = document.getElementById('reviewLogsSection');
    var vitalSignsTable = document.getElementById('diagnosis-and-procedure-container');

    // Check if logs are currently visible
    if (logsSection.style.display === "none" || logsSection.style.display === "") {
        logsSection.style.display = "block"; // Show logs
        vitalSignsTable.style.display = "none"; // Hide the table
        document.getElementById('viewLogs').innerText = "View Doctor Review"; // Update label text
    } else {
        logsSection.style.display = "none"; // Hide logs
        vitalSignsTable.style.display = "block"; // Show the table
        document.getElementById('viewLogs').innerText = "View Logs"; // Update label text
    }
}

function diagnosisToggleDivs() {
    const diagnosisDiv = document.getElementById("diagnosisDiv");
    const diagnosisMainDiv = document.getElementById("diagnosisMainDiv");

    // Check if the sidebar is collapsed
    if (diagnosisDiv.classList.contains("collapsed")) {
        // Show the sidebar
        diagnosisDiv.classList.remove("collapsed");
        
        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
            diagnosisDiv.style.display = "block"; // Make it visible
        });

        // Adjust mainDiv width
        diagnosisMainDiv.classList.remove("col-xl-12");
        diagnosisMainDiv.classList.add("col-xl-8");
    } else {
        // Hide the sidebar
        diagnosisDiv.classList.add("collapsed");

        // Delay before setting display to none
        setTimeout(() => {
            diagnosisDiv.style.display = "none"; // Hide it
        }, 100); // Match this with your CSS transition timing

        // Expand mainDiv to col-xl-12
        diagnosisMainDiv.classList.remove("col-xl-8");
        diagnosisMainDiv.classList.add("col-xl-12");
    }
}
