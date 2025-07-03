function sendMail(event) {
    event.preventDefault(); // Prevent form from submitting/reloading
    let emailValue = document.getElementById("email").value;
    // Check if email contains ".com"
    if (!emailValue.includes(".com")) {
        alert("Please enter a valid email address");
        return;
    }

    let parms = {
        name: document.getElementById("name").value,
        email: emailValue,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_r5w0zqg", "template_1t6bpjp", parms)
        .then(function(response) {
            alert("Email sent!");
        }, function(error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
}