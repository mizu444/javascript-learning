var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var mojsej = document.querySelector("#mojsej");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

function getColor() {
  return Math.floor(Math.random() * 256);
}

mojsej.addEventListener("click", function () {
  var randomNumber1 = getColor();
  var randomNumber2 = getColor();
  var randomNumber3 = getColor();
  var randomNumber4 = getColor();
  var randomNumber5 = getColor();
  var randomNumber6 = getColor();
  body.style.background =
    "linear-gradient(to right, rgb(" +
    randomNumber1 +
    ", " +
    randomNumber2 +
    ", " +
    randomNumber3 +
    "), rgb(" +
    randomNumber4 +
    ", " +
    randomNumber5 +
    ", " +
    randomNumber6 +
    "))";
});
