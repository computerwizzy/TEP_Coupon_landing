document.addEventListener('DOMContentLoaded', function () {
    const couponForm = document.getElementById('couponForm');
    const thankYouPage = document.getElementById('thankYouPage');
    const getAnotherCouponButton = document.getElementById('getAnotherCoupon');

    couponForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            storeCustomerInfo();
            couponForm.classList.add('hidden');
            thankYouPage.classList.remove('hidden');
        }
    });

    getAnotherCouponButton.addEventListener('click', function () {
        couponForm.reset();
        couponForm.classList.remove('hidden');
        thankYouPage.classList.add('hidden');
    });

    function validateForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const emailAddress = document.getElementById('emailAddress').value.trim();

        if (fullName.length < 3) {
            alert('Full Name must be at least 3 characters long.');
            return false;
        }

        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert('Phone Number must be between 10 and 15 digits.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            alert('Email Address is not valid.');
            return false;
        }

        return true;
    }

    function storeCustomerInfo() {
        const fullName = document.getElementById('fullName').value.trim();
        const phoneNumber = document.getElementById('phoneNumber').value.trim();
        const emailAddress = document.getElementById('emailAddress').value.trim();

        // Use Google Sheets API to store customer information
        // ...existing code to integrate Google Sheets API...
    }
});
