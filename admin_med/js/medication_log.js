async function administerDose(carePlanId) {
    const statusElement = document.getElementById(`status-dose-${carePlanId}`);
    const emergencyPatientId = document.querySelector('input[name="emergency_patient_id"]').value;

    try {
        // Send the API request to update the status
        const response = await fetch(`/api/administer-dose/${carePlanId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content') // Add CSRF token
            },
            body: JSON.stringify({
                status: 'Administered',
                emergency_patient_id: emergencyPatientId // Include this field
            })
        });

        if (response.ok) {
            // Update the status to "Administered" on success
            statusElement.innerText = "Administered";

            // Log the administration
            logDoseAdministration(carePlanId);
        } else {
            console.error('Failed to administer dose:', response.statusText);
        }
    } catch (error) {
        console.error('Error administering dose:', error);
    }
}

function logDoseAdministration(carePlanId) {
    console.log(`Care plan dose ${carePlanId} administered.`);
    // You can further implement logging if needed
}
