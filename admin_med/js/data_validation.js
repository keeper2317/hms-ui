function validateAssessmentInput() {
    const assessmentInput = document.getElementById('assessmentInput').value;
    if (assessmentInput.trim() === '' || assessmentInput.length < 10) {
        alert('Please enter at least 10 characters in the assessment field.');
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}

async function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the assessment input
    if (!validateAssessmentInput()) {
        return; // Stop execution if validation fails
    }

    const form = document.getElementById('assessmentForm');
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}' // Include CSRF token for Laravel
            }
        });

        if (response.ok) {
            // Form submission successful
            Swal.fire({
                title: 'Success!',
                text: 'Your assessment has been saved successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Optionally reset the form or redirect
                form.reset(); // Reset the form
                // window.location.href = '/your-success-page'; // Redirect to a success page
            });
        } else {
            // Handle error response
            const errorText = await response.text();
            Swal.fire({
                title: 'Error!',
                text: `An error occurred: ${errorText}`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        // Handle fetch error
        Swal.fire({
            title: 'Error!',
            text: `An error occurred: ${error.message}`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}