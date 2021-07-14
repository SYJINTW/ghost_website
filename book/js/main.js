const sendBtn = document.querySelector("#sendBtn");
const url = "https://ghost-test-server.herokuapp.com/api/wishing";

sendBtn.addEventListener("click", e => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const book_name = document.querySelector("#book_name").value;
  const isbn = document.querySelector("#isbn").value;

  if (!name) return window.alert("Please enter your name");
  else if (!email) return window.alert("Please enter your email address");
  else if (!book_name) return window.alert("Please enter the book name");
  else if (!isbn) return window.alert("Please enter the ISBN");

  if (isbn.length != 13) return window.alert("ISBN must be 13 digits");

  const data = {
    name: `${name}`,
    email: `${email}`,
    title: `${book_name}`,
    ISBN: `${isbn}`,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  window.alert("Successfully post the wish!");
  window.location.href = "/book.html";
});
