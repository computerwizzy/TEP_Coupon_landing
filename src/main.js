const couponForm = document.getElementById('couponForm');
const thankYouPage = document.getElementById('thankYouPage');
const resetFormButton = document.getElementById('resetForm');
const fullNameInput = document.getElementById('fullName');
const phoneNumberInput = document.getElementById('phoneNumber');
const emailInput = document.getElementById('email');
const fullNameError = document.getElementById('fullNameError');
const phoneNumberError = document.getElementById('phoneNumberError');
const emailError = document.getElementById('emailError');

function validateForm() {
    let isValid = true;

    // Validate Full Name
    if (fullNameInput.value.trim().length < 3) {
        fullNameError.textContent = 'Name must be at least 3 characters.';
        isValid = false;
    } else {
        fullNameError.textContent = '';
    }

    // Validate Phone Number
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNumberInput.value.trim())) {
        phoneNumberError.textContent = 'Phone number must be 10-15 digits.';
        isValid = false;
    } else {
        phoneNumberError.textContent = '';
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    return isValid;
}

couponForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        // Hide form and show thank you page
        couponForm.style.display = 'none';
        thankYouPage.style.display = 'block';

        // Display coupon code (already in HTML)

        // Here, we would also send the data to Google Sheets
    }
});

resetFormButton.addEventListener('click', function() {
    // Reset form and show it again
    couponForm.reset();
    fullNameError.textContent = '';
    phoneNumberError.textContent = '';
    emailError.textContent = '';
    thankYouPage.style.display = 'none';
    couponForm.style.display = 'block';
});
