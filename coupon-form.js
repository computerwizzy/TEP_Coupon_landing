document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('couponForm');
    const thankYouPage = document.getElementById('thankYouPage');
    const getAnotherBtn = document.getElementById('getAnotherCoupon');

    // Form validation
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const fullName = form.fullName.value.trim();
        const phoneNumber = form.phoneNumber.value.trim();
        const emailAddress = form.emailAddress.value.trim();

        // Validate name
        if (fullName.length < 3) {
            alert('Name must be at least 3 characters');
            return;
        }

        // Validate phone (10-15 digits)
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phoneNumber)) {
            alert('Please enter a valid phone number (10-15 digits)');
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            alert('Please enter a valid email address');
            return;
        }

        // If all validations pass
        form.classList.add('hidden');
        thankYouPage.classList.remove('hidden');
        
        // Store data in Google Sheets
        const data = {
            fullName,
            phoneNumber,
            emailAddress,
            timestamp: new Date().toISOString()
        };

        try {
            await use_mcp_tool({
                server_name: 'google-sheets-integration',
                tool_name: 'append_row',
                arguments: {
                    spreadsheetId: '1D1F02ByXqrpNQqf_58Nywrdm0CWHGRbswjq6w01Iv0U',
                    worksheetName: '2025',
                    rowData: data
                }
            });
        } catch (error) {
            console.error('Error saving to Google Sheets:', error);
            alert('There was an error saving your information. Please try again.');
            return;
        }
    });

    // Reset form functionality
    getAnotherBtn.addEventListener('click', function() {
        form.reset();
        form.classList.remove('hidden');
        thankYouPage.classList.add('hidden');
    });
});
