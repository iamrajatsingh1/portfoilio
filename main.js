function sendEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "iamrajatsingh1@gmail.com",
    Password: "",
    To: "iamrajatsingh1@gmail.com",
    From: email,
    Subject: `Email from ${name}`,
    Body: message,
  }).then(function (msg) {
    alert("Email sent successfully.");
  });
}
