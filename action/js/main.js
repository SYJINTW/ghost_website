const wishes = document.querySelector("#wishes");
const url = "https://ghost-test-server.herokuapp.com/api/wishing";
window.addEventListener("load", function () {
  fetch(url)
    .then(response => response.json())
    .then(data => {
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
          time: time,
        });
      });
      let index = 0;
      loadData(data, index);

      const goLeft = document.querySelector("#goLeft");
      const goRight = document.querySelector("#goRight");
      goLeft.addEventListener("click", e => {
        e.preventDefault();
        if (index < 5) return;
        index -= 5;
        loadData(data, index);
      });

      goRight.addEventListener("click", e => {
        e.preventDefault();

        if (index >= data.length - 5) return;
        index += 5;
        loadData(data, index);
      });
    });
});

function loadData(data, index) {
  let html = "";
  let htmlSegment = "";
  for (let i = 0; i < 5 && index < data.length; i++, index++) {
    htmlSegment += `<div class="list-row">
            <div class="list-row-item">
            <div class="list-item" id="title">
              <p>${data[i].title}</p>
            </div>
            <div class="list-item">
              <p>${data[i].ISBN}</p>
            </div>
            <div class="list-item-3" id="ISBN">
              <a class="btn" href="#">DONATE</a>
            </div>
            </div>
            </div>`;
  }
  html += htmlSegment;
  const list = document.querySelector(".list");
  list.innerHTML = html;
}
