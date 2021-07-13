const wishes = document.querySelector("#wishes");
const url = "https://ghost-test-server.herokuapp.com/api/wishing";

window.addEventListener("load", function () {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let time;
      wishes.innerHTML = data.length;
      if (data.length < 10) time = 100;
      else if (data.length >= 10 && data.length < 100) time = 500;
      else if (data.length >= 100 && data.length < 1000) time = 1000;
      else if (data.length >= 1000 && data.length < 10000) time = 1500;
      else time = 2000;

      jQuery(document).ready(function ($) {
        $("#wishes").counterUp({
          delay: 10,
          time: 500,
        });
      });
    });
});
