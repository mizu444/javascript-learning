const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

imgs.forEach((img) => {
  img.addEventListener("click", vyberObrazok);
});

function vyberObrazok(event) {
  imgs.forEach((img) => (img.style.opacity = 1));
  current.src = event.target.src;
  event.target.style.opacity = opacity;
}
