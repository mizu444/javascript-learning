var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll("li");

button.addEventListener("click", pridajli);

input.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    pridajli();
  }
});

function toggleDone(event) {
  event.target.classList.toggle("done");
}

function deleteTodo(event) {
  ul.removeChild(event.target.parentElement);
}

function pridajli() {
  if (input.value.trim()) {
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.addEventListener("click", deleteTodo);
    var text = document.createElement("span");
    text.appendChild(document.createTextNode(input.value + " "));
    text.addEventListener("click", toggleDone);

    li.appendChild(text);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  }
  input.value = "";
}

for (var i = 0; i < liItems.length; i++) {
  liItems[i].children[0].addEventListener("click", toggleDone);
  liItems[i].children[1].addEventListener("click", deleteTodo);
}
