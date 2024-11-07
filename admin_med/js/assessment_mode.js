function makeAssessmentFormReadonly() {
    const inputs = document.querySelectorAll('.datetime-input, .assessment-input');
    inputs.forEach(input => {
        input.setAttribute('readonly', true); // Make inputs read-only
    });

    // Change header text to "View Mode"
    document.getElementById('assessmentInputHeader').innerText = 'View Mode';

    // Change card-input border color to blue (View Mode)
    const cardInput = document.querySelector('.assessment-card-input');
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.remove('card-input-green');  // Remove green (Input Mode)
    cardInput.classList.add('card-input-blue');      // Add blue for View Mode

    // Hide buttons and show the relevant ones
    document.getElementById('assessmentSaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitAssessment').style.display = 'none'; // Hide Save Changes button
    document.getElementById('assessmentCancelBtn').style.display = 'none'; // Hide Clear button

    // Show the Back to Input Mode button
    document.getElementById('backToInputButtonAssessment').style.display = 'block'; // Show Back to Input Mode button
}

function enterAssessmentEditMode() {
    const inputs = document.querySelectorAll('.datetime-input, .assessment-input');
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
    });

    // Change header text to "Edit Mode"
    document.getElementById('assessmentInputHeader').innerText = 'Edit Mode';

    // Change card-input border color to yellow (Edit Mode)
    const cardInput = document.querySelector('.assessment-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-green'); // Remove green (Input Mode)
    cardInput.classList.add('card-input-yellow');   // Add yellow for Edit Mode

    // Hide buttons and show the relevant ones
    document.getElementById('assessmentSaveBtn').style.display = 'none'; // Hide Save button
    document.getElementById('editSubmitAssessment').style.display = 'block'; // Show Save Changes button
    document.getElementById('assessmentCancelBtn').style.display = 'none'; // Hide Clear button
    document.getElementById('backToInputButtonAssessment').style.display = 'block'; // Show Back to Input Mode button
}

function showAssessmentInputMode() {
    const form = document.getElementById('assessmentForm');

    // Reset form action to store data
    form.action = '/emergency/ep-assessment/store';  // Set action to store route

    // Remove the hidden _method input for PATCH if it exists
    const methodInput = document.getElementById('_method');
    if (methodInput) {
        methodInput.remove(); // Remove _method so it submits as POST
    }

    const inputs = document.querySelectorAll('.assessment-input'); // Only clear non-date and non-time inputs
    inputs.forEach(input => {
        input.removeAttribute('readonly'); // Make inputs editable
        input.value = '';  // Clear fields for new input
    });

    // Change header text back to "Input Mode"
    document.getElementById('assessmentInputHeader').innerText = 'Input Mode';

    // Change card-input border color to green (Input Mode)
    const cardInput = document.querySelector('.assessment-card-input');
    cardInput.classList.remove('card-input-blue');  // Remove blue (View Mode)
    cardInput.classList.remove('card-input-yellow'); // Remove yellow (Edit Mode)
    cardInput.classList.add('card-input-green');    // Add green for Input Mode

    // Show relevant buttons and hide others
    document.getElementById('assessmentSaveBtn').style.display = 'block'; // Show Save button
    document.getElementById('editSubmitAssessment').style.display = 'none'; // Hide Save Changes button
    document.getElementById('assessmentCancelBtn').style.display = 'block'; // Show Clear button
    document.getElementById('backToInputButtonAssessment').style.display = 'none'; // Hide Back to Input Mode button
    document.getElementById('downloadFileBtn').style.display = 'none';

    // Reset the current file message back to the default
    const currentFileElement = document.getElementById('current-file');
    currentFileElement.textContent = ''; // Clear the message
}

function populateFormAssessment(assessment) {
    // Set form action dynamically to the update route
    const form = document.getElementById('assessmentForm');
    form.action = `/emergency/ep-assessment/update/${assessment.ep_assessment_id}`;

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
    document.getElementById('epAssessmentId').value = assessment.ep_assessment_id;
    document.getElementById('assessment-date-input').value = assessment.ep_assessment_date;
    document.getElementById('assessment-time-input').value = convertTo24Hour(assessment.ep_assessment_time);
    document.getElementById('assessmentInput').value = assessment.ep_assessment_assessments;
    // Populate the diagnostic test dropdown
    document.getElementById('diagnostic-test-select').value = assessment.ep_assessment_test;

    // Populate the test instructions
    document.getElementById('test-instructions').value = assessment.ep_assessment_test_instruction;

    // Populate the test priority dropdown
    document.getElementById('test-priority').value = assessment.ep_assessment_priority;

    // File input: Note that you cannot set the value of the file input for security reasons.
    // Instead, display a message indicating the current file (if needed), or leave it empty for user to upload new file.

    // Store and display the current file name
    currentFileName = assessment.order_test_file || 'No file uploaded.';
    const currentFileElement = document.getElementById('current-file');
    if (currentFileElement) {
        currentFileElement.textContent = `Current file: ${currentFileName}`;
    }

    // Populate the email field
    document.getElementById('labEmail').value = assessment.ep_test_email;
}

// Modify the form submission to handle file uploads
// function handleFormSubmission(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const form = document.getElementById('assessmentForm');
//     const fileInput = document.getElementById('lab-request-file');

//     // Check if a new file is selected
//     if (fileInput.files.length === 0) {
//         // Notify user that the current file remains unchanged
//         alert(`Current file remains unchanged: ${currentFileName}`);
//     }

//     // Proceed with form submission
//     form.submit(); // Submit the form after checks
// }

// Attach the handleFormSubmission function to the form's submit event
document.getElementById('assessmentForm').addEventListener('submit', handleFormSubmission);

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

function populateFormViewAssessment(assessment) {
    //
    document.getElementById('epAssessmentId').value = assessment.ep_assessment_id;
    document.getElementById('assessment-date-input').value = assessment.ep_assessment_date;
    document.getElementById('assessment-time-input').value = convertTo24Hour(assessment.ep_assessment_time);
    document.getElementById('assessmentInput').value = assessment.ep_assessment_assessments;
    // Populate the diagnostic test dropdown
    document.getElementById('diagnostic-test-select').value = assessment.ep_assessment_test;

    // Populate the test instructions
    document.getElementById('test-instructions').value = assessment.ep_assessment_test_instruction;

    // Populate the test priority dropdown
    document.getElementById('test-priority').value = assessment.ep_assessment_priority;

    // File input: Note that you cannot set the value of the file input for security reasons.
    // Instead, display a message indicating the current file (if needed), or leave it empty for user to upload new file.
    // Store and display the current file name
    currentFileName = assessment.order_test_file || 'No file uploaded.';
    const currentFileElement = document.getElementById('current-file');
    if (currentFileElement) {
        currentFileElement.textContent = `Current file: ${currentFileName}`;
    }

    // Populate the email field
    document.getElementById('labEmail').value = assessment.ep_test_email;
}


function changeFileInputToDownload() {
    // Hide the file input


    // Show the Download/Print buttons
    document.getElementById('downloadFileBtn').style.display = 'block';
}

// Simulate downloading the file (you can replace this with your own logic)
function downloadFile() {
    // alert('Downloading file...');
    // Logic to download the file can be added here (e.g., using AJAX or linking to the file path)
    const assessmentId = document.getElementById('epAssessmentId').value; // Get the assessment ID
    const downloadUrl = `/emergency/ep-assessment/download/${assessmentId}`; // Construct the URL

    // Redirect to the download URL
    window.location.href = downloadUrl;
}


function assessmentToggleLogs() {
    var logsSection = document.getElementById('assessmentLogsSection');
    var vitalSignsTable = document.getElementById('assessmentTableContainer');

    // Check if logs are currently visible
    if (logsSection.style.display === "none" || logsSection.style.display === "") {
        logsSection.style.display = "block"; // Show logs
        vitalSignsTable.style.display = "none"; // Hide the table
        document.getElementById('viewLogs').innerText = "View Assessment History"; // Update label text
    } else {
        logsSection.style.display = "none"; // Hide logs
        vitalSignsTable.style.display = "block"; // Show the table
        document.getElementById('viewLogs').innerText = "View Logs"; // Update label text
    }
}


function assessmentToggleDivs() {
    const assessmentDiv = document.getElementById("assessmentDiv");
    const assessmentMainDiv = document.getElementById("assessmentMainDiv");

    // Check if the sidebar is collapsed
    if (assessmentDiv.classList.contains("collapsed")) {
        // Show the sidebar
        assessmentDiv.classList.remove("collapsed");

        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
            assessmentDiv.style.display = "block"; // Make it visible
        });

        // Adjust mainDiv width
        assessmentMainDiv.classList.remove("col-xl-12");
        assessmentMainDiv.classList.add("col-xl-8");
    } else {
        // Hide the sidebar
        assessmentDiv.classList.add("collapsed");

        // Delay before setting display to none
        setTimeout(() => {
            assessmentDiv.style.display = "none"; // Hide it
        }, 100); // Match this with your CSS transition timing

        // Expand mainDiv to col-xl-12
        assessmentMainDiv.classList.remove("col-xl-8");
        assessmentMainDiv.classList.add("col-xl-12");
    }
}
