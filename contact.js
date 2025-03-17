function sendMail() {
    let parms = {
        name: document.getElementById("FullName").value,
        email: document.getElementById("Email").value,
        phone: document.getElementById("Phone").value,
        comments: document.getElementById("Comments").value
    };

    emailjs.send("service_k7l0gm3", "template_v1acenq", parms)
        .then(function (response) {
            alert("Your Email Sent Successfully!");
            console.log("Email sent:", response);
        })
        .catch(function (error) {
            alert("Failed to send email. Please try again.");
            console.log("Error:", error);
        });
}
