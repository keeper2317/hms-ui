const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const steps = document.querySelectorAll('.step');
const form_steps = document.querySelectorAll('.form-step');
let active = 1;

// nextButton.addEventListener('click', () => {
//     active++;
//     if (active > steps.length) {
//         active = steps.length;
//     }
//     updateProgress();
// })

// prevButton.addEventListener('click', () => {
//     active--;
//     if (active < 1) {
//         active = 1;
//     }
//     updateProgress();
// })

// const updateProgress = () => {
//     console.log('steps.length => ' + steps.length);
//     console.log('active => ' + active);

//     // toggle .active class for each list item
    // steps.forEach((step, i) => {
    //     if (i == (active - 1)) {
    //         step.classList.add('active');
    //         form_steps[i].classList.add('active');
    //         console.log('i => ' + i);
    //     } else {
    //         step.classList.remove('active');
    //         form_steps[i].classList.remove('active');
    //     }
    // });

    

// }

// Update progress and form steps
const updateProgress = () => {
    steps.forEach((step, i) => {
        if (i === (active - 1)) {
            step.classList.add('active');
            form_steps[i].classList.add('active');
        } else {
            step.classList.remove('active');
            form_steps[i].classList.remove('active');
        }
    });

    // Disable/Enable Prev and Next buttons
    prevButton.disabled = active === 1;
    nextButton.disabled = active === steps.length;

    //enable or disable prev and next buttons
    // if (active === 1) {
    //     prevButton.disabled = true;
    // } else if (active === steps.length) {
    //     nextButton.disabled = true;
    // } else {
    //     prevButton.disabled = false;
    //     nextButton.disabled = false;
    // }
};

// Check for required fields
const validateStep = () => {
    const currentStepFields = form_steps[active - 1].querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    currentStepFields.forEach(field => {
        if (!field.checkValidity()) {
            field.classList.add('invalid');
            isValid = false;
        } else {
            field.classList.remove('invalid');
        }
    });

    return isValid;
};



// Next Button Click Handler
nextButton.addEventListener('click', () => {
    if (validateStep()) {
        active++;
        if (active > steps.length) active = steps.length;
        updateProgress();
    }
});

// Prev Button Click Handler
prevButton.addEventListener('click', () => {
    active--;
    if (active < 1) active = 1;
    updateProgress();
});



document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('click', function () {
        if (this.checked && this.dataset.clicked) {
            this.checked = false; // Deselect the radio button
            this.removeAttribute('data-clicked'); // Reset the flag
        } else {
            this.setAttribute('data-clicked', 'true'); // Set the flag on first click
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const insuranceYes = document.getElementById('yes-insurance');
    const insuranceNo = document.getElementById('no-insurance');
    const insuranceFields = document.getElementById('insurance-fields');

    const policyholderYes = document.getElementById('yes-policyholder');
    const policyholderNo = document.getElementById('no-policyholder');
    const policyholderFields = document.getElementById('policyholder-fields');

    const secondaryInsuranceYes = document.getElementById('yes-secondary-insurance');
    const secondaryInsuranceNo = document.getElementById('no-secondary-insurance');
    const secondaryInsuranceFields = document.getElementById('second-insurance-fields');

    function toggleFields(radioYes, radioNo, fields) {
        radioYes.addEventListener('change', function () {
            if (this.checked) {
                fields.style.display = 'block';
                enableFields(fields, true);
            }
        });

        radioNo.addEventListener('change', function () {
            if (this.checked) {
                fields.style.display = 'none';
                enableFields(fields, false);
            }
        });
    }

    function enableFields(fields, enable) {
        const inputs = fields.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.disabled = !enable;
        });
    }

    toggleFields(insuranceYes, insuranceNo, insuranceFields);
    toggleFields(policyholderYes, policyholderNo, policyholderFields);
    toggleFields(secondaryInsuranceYes, secondaryInsuranceNo, secondaryInsuranceFields);

     // Initially hide conditional fields
     insuranceFields.style.display = 'none';
     secondaryInsuranceFields.style.display = 'none';
     policyholderFields.style.display = 'none';
});


// Style invalid fields with red border
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('input', function () {
        if (field.checkValidity()) {
            field.classList.remove('invalid');
        }
    });
});

// Add invalid class in CSS for visual feedback
const style = document.createElement('style');
style.innerHTML = `
    input.invalid, select.invalid, textarea.invalid {
        border: 1px solid red;
    }
`;
document.head.appendChild(style);
