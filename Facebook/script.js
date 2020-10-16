var database = [
  {
    username: "Mizu",
    password: "neviem",
  },
  {
    username: "Fero",
    password: "1234",
  },
  {
    username: "Jozo",
    password: "hadaj",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "blabla",
  },
  {
    username: "Sally",
    timeline: "haha",
  },
  {
    username: "Mitch",
    timeline: "som chuj",
  },
];

function isUserValid(username, password) {

  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}


function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsFeed);
  } else {
    alert("Sorry, Fuck you!");
  }
}


var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt);
