function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting/reloading
    let emailValue = document.getElementById("email").value;
    // Check if email contains ".com", i feel like its useless....
    if (!emailValue.includes(".com")) {
        alert("Please enter a valid email address");
        return;
    }

    let parms = {
        name: document.getElementById("name").value,
        email: emailValue,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_jpkn8dm", "template_vy0gqwp", parms)
        .then(function(response) {
            alert("Email sent!");
        }, function(error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
}
