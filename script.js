document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Validate form inputs
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const address = document.getElementById('address').value.trim();
      const phone = document.getElementById('phone').value.trim();
  
      if (firstName === '') {
        displayValidationMessage('firstName', 'Please enter your First Name');
        return;
      } else {
        clearValidationMessage('firstName');
      }
  
      if (lastName === '') {
        displayValidationMessage('lastName', 'Please enter your Last Name');
        return;
      } else {
        clearValidationMessage('lastName');
      }
  
      if (address === '') {
        displayValidationMessage('address', 'Please enter your Address');
        return;
      } else {
        clearValidationMessage('address');
      }
  
      if (phone === '') {
        displayValidationMessage('phone', 'Please enter your Phone Number');
        return;
      } else {
        clearValidationMessage('phone');
      }
  
      console.log('Form submitted with:');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Address:', address);
      console.log('Phone:', phone);
  
      form.reset();
    });
  
    function displayValidationMessage(inputId, message) {
      const validationMessageElement = document.querySelector(`[data-for="${inputId}"]`);
      if (validationMessageElement) {
        validationMessageElement.textContent = message;
      }
    }
  
    function clearValidationMessage(inputId) {
      const validationMessageElement = document.querySelector(`[data-for="${inputId}"]`);
      if (validationMessageElement) {
        validationMessageElement.textContent = '';
      }
    }
  });
  