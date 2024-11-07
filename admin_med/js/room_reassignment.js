function openRoomReassignmentModal(button) {
    const currentBedNo = button.getAttribute('data-current-bed');
    const emergencyPatientId = button.getAttribute('data-emergency-patient-id');

    // Update the current room number display in the modal
    document.getElementById('currentRoomNumber').innerText = `Bed ${currentBedNo}`;

    // Store the emergency patient ID in a hidden input or directly use it in the confirmation function
    document.getElementById('emergencyPatientId').value = emergencyPatientId; // Add a hidden input for later use

    // Fetch and populate new room options based on available beds
    fetch('https://hospital-api-yal8.onrender.com/beds-all')
        .then(response => response.json())
        .then(data => {
            const newRoomSelect = document.getElementById('newRoom');
            newRoomSelect.innerHTML = ''; // Clear previous options

            // Add the default "Please Select" option
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.innerText = 'Please Select';
            newRoomSelect.appendChild(defaultOption);

            // Populate available beds
            data.available.forEach(bed => {
                const option = document.createElement('option');
                option.value = bed.bed_no;
                option.innerText = `Room No: ${bed.room_no} - Bed No: ${bed.bed_no}`;
                newRoomSelect.appendChild(option);
            });

            // Populate occupied beds (disabled)
            data.occupied.forEach(bed => {
                const option = document.createElement('option');
                option.value = bed.bed_no;
                option.innerText = `Room No: ${bed.room_no} - Bed No: ${bed.bed_no} (Occupied)`;
                option.disabled = true; // Disable occupied beds
                newRoomSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching beds:', error));
}

function confirmRoomReassignment() {
    const newRoom = document.getElementById('newRoom').value;
    const emergencyPatientId = document.getElementById('emergencyPatientId').value; // Get the patient ID from a hidden input field

    if (!newRoom) {
        Swal.fire('Please select a new room');
        return;
    }

    // Call your Laravel controller to update the room assignment for the specific patient
    fetch(`/patients/reassign-room/${emergencyPatientId}`, { // Adjusted to point to your Laravel route
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), // Include CSRF token if needed
        },
        body: JSON.stringify({ bed_no: newRoom }), // Send the new bed number in the request body
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        Swal.fire(data.message || 'Room reassigned successfully!').then(() => {
            location.reload(); // Reload the page
        }); // Display success message
        // Optionally, refresh the table or perform other actions

    })
    .catch(error => {
        console.error('Error:', error);
        Swal.fire('An error occurred while reassigning the room: ' + error.message); // Display the error message
    });
}
