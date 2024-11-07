document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 0;
    const steps = document.querySelectorAll('.step');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn1 = document.getElementById('submitBtn1');
    const form = document.getElementById('registrationForm'); // Reference to the form

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = (index === stepIndex) ? 'block' : 'none';
        });

        prevBtn.style.display = (stepIndex === 0) ? 'none' : 'inline';

        // Hide the Next button on the fifth step
        nextBtn.style.display = (stepIndex === 4) ? 'none' : 'inline';

        // Show the Register button only on the fifth step
        submitBtn1.style.display = (stepIndex === 4) ? 'block' : 'none';
    }

    function validateCurrentStep() {
        const inputs = steps[currentStep].querySelectorAll('input[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (input.type === 'text' || input.type === 'select-one') {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            }
        });

        return isValid;
    }

    nextBtn.addEventListener('click', (event) => {
        if (!validateCurrentStep()) {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Fields',
                text: 'Please fill out all required fields before proceeding!',
            });
            return;
        }

        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    submitBtn1.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission

        if (validateCurrentStep()) {
            form.submit(); // Submits the form if validation passes
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Incomplete Fields',
                text: 'Please fill out all required fields before submitting!',
            });
        }
    });

    showStep(currentStep);

    // Prevent closing the modal on clicking inside it
    document.getElementById('patientAdmissionModal').addEventListener('click', function (event) {
        event.stopPropagation();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle insurance fields and set required attributes
    const toggleInsuranceFields = () => {
        const insuranceFields = document.querySelectorAll('.insurance-fields');
        const hasInsuranceYes = document.getElementById('hasInsuranceYes');
        const hasInsuranceNo = document.getElementById('hasInsuranceNo');

        // Check which radio button is selected and toggle visibility
        if (hasInsuranceYes.checked) {
            insuranceFields.forEach(field => field.style.display = 'block');
            // Set required fields when insurance is yes
            setRequiredAttributes(true);
        } else if (hasInsuranceNo.checked) {
            insuranceFields.forEach(field => field.style.display = 'none');
            // Clear required fields when insurance is no
            setRequiredAttributes(false);
        }
    };

    // Function to set or clear required attributes
    const setRequiredAttributes = (isRequired) => {
        const requiredFields = [
            'primaryInsuranceProvider',
            'primaryPolicyholderName',
            'primaryPolicyNumber',
            'effectiveDate',
            'expirationDate'
        ];

        requiredFields.forEach(fieldName => {
            const field = document.querySelector(`input[name="${fieldName}"], select[name="${fieldName}"]`);
            if (field) {
                field.required = isRequired;
            }
        });
    };

    // Attach change event listeners to the radio buttons
    document.querySelectorAll('input[name="has_insurance"]').forEach((radio) => {
        radio.addEventListener('change', toggleInsuranceFields);
    });

    // Initialize the form display state
    toggleInsuranceFields();
});
