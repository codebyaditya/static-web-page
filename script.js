document.getElementById('send-otp-btn').addEventListener('click', function () {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    document.getElementById('generated-otp').innerText = otp;
    document.getElementById('generated-otp').style.display = 'block';
    document.getElementById('otp').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'block';
    alert(`Your OTP is: ${otp}`);
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    const generatedOtp = document.getElementById('generated-otp').innerText;

    if (otp === generatedOtp) {
        alert('Form submitted successfully!');
        // Here you can add code to handle the form submission (e.g., send form data to a server)
    } else {
        alert('Invalid OTP');
    }
});
