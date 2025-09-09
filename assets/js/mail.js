// Initialize EmailJS with your user ID
emailjs.init("eJyGB7fxi25NmRsCf");

function sendEmail(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // if (!name || !email || !phone || !subject || !message) {
  //   alert("All fields are required!");
  //   return;
  // }

  const templateParams = {
    from_name: name,
    from_email: email,
    from_phone: phone,
    subject: subject,
    message: message,
  };

  emailjs
    .send("service_dmz907a", "template_9fvha9i", templateParams)
    .then(
      function (response) {
        alert("Email sent successfully! 🎉");
        document.getElementById("contact-form").reset(); // Reset the form
      },
      function (error) {
        alert("Failed to send email. 😢 Error: " + error.text);
      }
    );
}
