document.addEventListener('DOMContentLoaded', function() {
    const reminderToggle = document.getElementById('reminderToggle');
    const manualMinutes = document.getElementById('manualMinutes');
    const sliderText = document.getElementById('sliderText');

    reminderToggle.addEventListener('change', function(){
        if (this.checked){
            manualMinutes.disabled = true;
            manualMinutes.value = ''; 
            sliderText.textContent = 'Auto';
            
        } else {
            manualMinutes.disabled = false;
           
            sliderText.textContent = 'Manual';
           
        }
    })

    manualMinutes.addEventListener('input', function(){
        if (this.value < 1){
            this.value = '';
            alert('Please enter a valud number greater than 0.');
        }
        
    })


});

