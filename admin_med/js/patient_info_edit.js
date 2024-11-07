document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('updateButton').addEventListener('click', function() {
        if (this.textContent === "Update") {
            this.textContent = 'Cancel';
            this.classList.remove('btn-outline-primary');
            this.classList.add('btn-outline-light');

            // Select only the relevant input fields
            const fields = document.querySelectorAll('.dob-input, .nationality-input, .religion-input, .sex-input, .address-input, .phone-input, .civil-status-input, .employment-input, .email-input');
            const saveUpdate = document.getElementById('saveUpdateButton');

            fields.forEach(field => {
                field.removeAttribute('readonly');
                field.style.border = '1px solid black'; // Change border to indicate edit mode
            });
            saveUpdate.style.display = 'block'; // Show the save button
            
        } else {
            this.textContent = "Update";
            this.classList.remove('btn-outline-light');
            this.classList.add('btn-outline-primary');
            
            const saveUpdate = document.getElementById('saveUpdateButton');
            const fields = document.querySelectorAll('.dob-input, .nationality-input, .religion-input, .sex-input, .address-input, .phone-input, .civil-status-input, .employment-input, .email-input');
            
            fields.forEach(field => {
                field.setAttribute('readonly', 'readonly'); // Set readonly back
                field.style.border = '0'; // Remove border for readonly
            });

            saveUpdate.style.display = 'none'; // Hide the save button
        }
    });
});