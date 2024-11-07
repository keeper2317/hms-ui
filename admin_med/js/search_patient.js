document.addEventListener('DOMContentLoaded', () => {
    const patients = ["Jarrell Adams", "John Doe", "Jane Smith", "Alice Johnson"]; // Example data

    const input = document.getElementById('patientSearch');
    const resultsDropdown = document.getElementById('searchResults');

    // Listen for input events
    input.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        resultsDropdown.innerHTML = ''; // Clear previous results
        console.log("Query:", query); // Debugging: log the current query

        if (query) {
            const filteredPatients = patients.filter(patient => 
                patient.toLowerCase().includes(query)
            );
            
            console.log("Filtered Patients:", filteredPatients); // Debugging: log filtered results
            
            if (filteredPatients.length > 0) {
                resultsDropdown.style.display = 'block'; // Show dropdown
                console.log("Dropdown is displayed"); // Debugging log
            
                filteredPatients.forEach(patient => {
                    const option = document.createElement('div');
                    option.classList.add('dropdown-item');
                    option.textContent = patient;
                    option.addEventListener('click', function () {
                        input.value = patient;
                        resultsDropdown.style.display = 'none'; // Hide dropdown after selection
                    });
                    resultsDropdown.appendChild(option);
                });
            } else {
                resultsDropdown.style.display = 'none'; // Hide dropdown if no matches
                console.log("Dropdown is hidden"); // Debugging log
            }
        } else {
            resultsDropdown.style.display = 'none'; // Hide dropdown if input is empty
        }
    });

    // Hide dropdown if the user clicks outside
    document.addEventListener('click', function (e) {
        if (!resultsDropdown.contains(e.target) && e.target !== input) {
            resultsDropdown.style.display = 'none';
        }
    });
});
