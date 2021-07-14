const sendBtn = document.querySelector("#sendBtn");
const url = "https://ghost-test-server.herokuapp.com/api/wishing";

sendBtn.addEventListener("click", e => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const message = document.querySelector("#message").value;

  if (!name) return window.alert("Please enter your name");
  else if (!email) return window.alert("Please enter your email address");
  else if (!subject) return window.alert("Please enter the subject");
  else if (!message) return window.alert("Please enter the message");

  const data = {
    name: `${name}`,
    email: `${email}`,
    subject: `${subject}`,
    message: `${message}`,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  window.alert("Thanks for send us message! We will contact you soon!");
  window.location.href = "/contact.html";
});
