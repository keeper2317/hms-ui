function makeTreatmentFormReadonly() {
    const inputs = document.querySelectorAll('.datetime-input, .weight-input'); // Adjusted to relevant input classes
    inputs.forEach(input => {
        input.setAttribute('readonly', true); // Make inputs read-only
    });

    // Change header text to "View Mode"
    document.getElementById('treatmentInputHeader').innerText = 'View Mode';

    // Change card-input border color to blue (View Mode)
    const cardInput = document.querySelector('.treatment-card-input'); // Assuming the entire card body is treated as card input
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.remove('card-input-green');  // Remove green (Input Mode)
    cardInput.classList.add('card-input-blue');      // Add blue for View Mode

    // Hide buttons and show the relevant ones
    document.getElementById('treatmentSaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitTreatment').style.display = 'none'; // Hide Save Changes button
    document.getElementById('treatmentCancelBtn').style.display = 'none'; // Hide Print button

    // Show the Back to Input Mode button
    document.getElementById('backToInputButtonTreatment').style.display = 'block'; // Show Back to Input Mode button
}

function enterTreatmentEditMode() {
    const inputs = document.querySelectorAll('.datetime-input, .weight-input'); // Adjusted to relevant input classes
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
    });

    // Change header text to "Edit Mode"
    document.getElementById('treatmentInputHeader').innerText = 'Edit Mode';

    // Change card-input border color to yellow (Edit Mode)
    const cardInput = document.querySelector('.treatment-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-green'); // Remove green (Input Mode)
    cardInput.classList.add('card-input-yellow');   // Add yellow for Edit Mode

    // Hide buttons and show the relevant ones
    document.getElementById('treatmentSaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitTreatment').style.display = 'block'; // Show Save Changes button
    document.getElementById('treatmentCancelBtn').style.display = 'none'; // Hide Print button
    document.getElementById('backToInputButtonTreatment').style.display = 'block'; // Show Back to Input Mode button
}

function showTreatmentInputMode() {
    const form = document.getElementById('treatmentForm');

    // Reset form action to store data
    form.action = '/emergency/treatment-plan/store';  // Set action to store route

    // Remove the hidden _method input for PATCH if it exists
    const methodInput = document.getElementById('_method');
    if (methodInput) {
        methodInput.remove(); // Remove _method so it submits as POST
    }

    const inputs = document.querySelectorAll('.weight-input'); // Only clear relevant inputs
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
        input.value = '';  // Clear fields for new input
    });

    // Change header text back to "Input Mode"
    document.getElementById('treatmentInputHeader').innerText = 'Input Mode';

    // Change card-input border color to green (Input Mode)
    const cardInput = document.querySelector('.treatment-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.add('card-input-green');    // Add green for Input Mode

    // Show relevant buttons and hide others
    document.getElementById('treatmentSaveBtn').style.display = 'block'; // Show Save button
    document.getElementById('editSubmitTreatment').style.display = 'none'; // Hide Save Changes button
    document.getElementById('treatmentCancelBtn').style.display = 'block'; // Show Print button
    document.getElementById('backToInputButtonTreatment').style.display = 'none'; // Hide Back to Input Mode button
}


function treatmentToggleLogs() {
    var logsSection = document.getElementById('treatmentLogsSection');
    var vitalSignsTable = document.getElementById('treatmentTableContainer');

    // Check if logs are currently visible
    if (logsSection.style.display === "none" || logsSection.style.display === "") {
        logsSection.style.display = "block"; // Show logs
        vitalSignsTable.style.display = "none"; // Hide the table
        document.getElementById('viewLogs').innerText = "View Treatment History"; // Update label text
    } else {
        logsSection.style.display = "none"; // Hide logs
        vitalSignsTable.style.display = "block"; // Show the table
        document.getElementById('viewLogs').innerText = "View Logs"; // Update label text
    }
}

function populateFormTreatmentPlan(treatment_plan) {
    // Set form action dynamically to the update route
    const form = document.getElementById('treatmentForm');
    form.action = `/emergency/treatment-plan/update/${treatment_plan.ep_treatment_plan_id}`;

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
    document.getElementById('startDateInput').value = treatment_plan.ep_treatment_plan_start_date;
    document.getElementById('endDateInput').value = treatment_plan.ep_treatment_plan_end_date;
    document.getElementById('medicationInput1').value = treatment_plan.ep_treatment_plan_medication;
    document.getElementById('dosageInput').value = treatment_plan.ep_treatment_plan_dosage;
    document.getElementById('frequencyInput').value = treatment_plan.ep_treatment_plan_frequency;
    document.getElementById('durationInput').value = treatment_plan.ep_treatment_plan_duration;
    document.getElementById('additionalNotes').value = treatment_plan.ep_treatment_plan_note;
}

function populateFormViewTreatmentPlan(treatment_plan) {
    //
    document.getElementById('startDateInput').value = treatment_plan.ep_treatment_plan_start_date;
    document.getElementById('endDateInput').value = treatment_plan.ep_treatment_plan_end_date;
    document.getElementById('medicationInput1').value = treatment_plan.ep_treatment_plan_medication;
    document.getElementById('dosageInput').value = treatment_plan.ep_treatment_plan_dosage;
    document.getElementById('frequencyInput').value = treatment_plan.ep_treatment_plan_frequency;
    document.getElementById('durationInput').value = treatment_plan.ep_treatment_plan_duration;
    document.getElementById('additionalNotes').value = treatment_plan.ep_treatment_plan_note;
}


function treatmentToggleDivs() {
    const treatmentDiv = document.getElementById("treatmentDiv");
    const treatmentMainDiv = document.getElementById("treatmentMainDiv");

    // Check if the sidebar is collapsed
    if (treatmentDiv.classList.contains("collapsed")) {
        // Show the sidebar
        treatmentDiv.classList.remove("collapsed");
        
        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
            treatmentDiv.style.display = "block"; // Make it visible
        });

        // Adjust mainDiv width
        treatmentMainDiv.classList.remove("col-xl-12");
        treatmentMainDiv.classList.add("col-xl-8");
    } else {
        // Hide the sidebar
        treatmentDiv.classList.add("collapsed");

        // Delay before setting display to none
        setTimeout(() => {
            treatmentDiv.style.display = "none"; // Hide it
        }, 100); // Match this with your CSS transition timing

        // Expand mainDiv to col-xl-12
        treatmentMainDiv.classList.remove("col-xl-8");
        treatmentMainDiv.classList.add("col-xl-12");
    }
}
