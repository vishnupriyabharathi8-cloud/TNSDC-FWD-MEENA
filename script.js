// Handle contact form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault(); // Prevent page refresh

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  // Show confirmation

  document.getElementById("formMessage").innerText =

    `Thanks, ${name}! Your message has been sent.`;

  // Reset form

  this.reset();

});