document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');
    const durationInput = document.getElementById('durationInput');

    function calculateDuration() {
        const startDateValue = startDateInput.value;
        const endDateValue = endDateInput.value;

        // Check if both dates are provided
        if (startDateValue && endDateValue) {
            const startDate = new Date(startDateValue);
            const endDate = new Date(endDateValue);

            // Calculate the duration in days
            const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            
            // Ensure duration is not negative
            durationInput.value = duration >= 0 ? duration : 0; 
        } else {
            durationInput.value = ''; // Clear duration if one of the inputs is missing
        }
    }

    // Event listeners to trigger duration calculation
    startDateInput.addEventListener('change', calculateDuration);
    endDateInput.addEventListener('change', calculateDuration);
});