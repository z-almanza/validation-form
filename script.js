// Form Validation script edited by Zamantha Almanza

document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages and result message
    clearErrors();
    document.getElementById('resultMessage').textContent = '';

    try {
        console.log('Form submission started'); // Console debugging simple message
        // Validate the form
        validateForm();
        
        // If no errors, display success message
        document.getElementById('resultMessage').textContent = 'Form submitted successfully!';
        document.getElementById('resultMessage').classList.remove('text-danger');
        document.getElementById('resultMessage').classList.add('text-success');
    } catch (error) {
        console.error('Validation error:', error); // Console debugging message name with error
        handleValidationError(error);
        document.getElementById('resultMessage').textContent = 'Form validation failed. Please fix the errors and try again.';
        document.getElementById('resultMessage').classList.add('text-danger');
    } finally {
        console.log('Validation attempt finished.');
    }
});

// Function: Clear Previous Error Messages
function clearErrors() {
    console.log('Clearing error messages');
    // Clear error from nameError on form
    document.getElementById('nameError').textContent = '';
    // Clear error from emailError on form
    document.getElementById('emailError').textContent = '';
    // Clear error from passwordError on form
    document.getElementById('passwordError').textContent = '';
    // Clear error from confirmPasswordError on form
    document.getElementById('confirmPasswordError').textContent = '';
}

// Function: Validate Form Data
function validateForm() {
    // Assign input values to variables
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    console.log('Validating form', { name, email, password, confirmPassword }); // Console debugging with multiple values

    // Validate name field
    if (name.trim() === '') {
        throw new Error('Name is required');
    }

    // Validate email field 
    if (!validateEmail(email)) {
        throw new Error('Invalid email format');
    }

    // Validate password length
    if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
    }

    // Validate if password and confirmPassword match
    if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
    }
}

// Function: Custom Email Validation
function validateEmail(email) {
    console.log('Validating email:', email);
    // Regular expression to check email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); //Returns true if email is valid, false otherwise
}

// Function: Display Validation Errors
function handleValidationError(error) {
    console.log('Handling validation error:', error.message);
    // Display specific error messages
    switch (error.message) {
        case 'Name is required':
            document.getElementById('nameError').textContent = error.message;
            break;

        case 'Invalid email format':
            document.getElementById('emailError').textContent = error.message;
            break;

        case 'Password must be at least 8 characters long':
            document.getElementById('passwordError').textContent = error.message;
            break;

        case 'Passwords do not match':
            document.getElementById('confirmPasswordError').textContent = error.message;
            break;

        default:
            console.error('Unknown validation error:', error);
            break;
    }
}
