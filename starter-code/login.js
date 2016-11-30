console.log("login.js loaded");
var password;
var userLogin = {username : "b.obama", password : "goddammitjoe"};
var loggedIn = false;

while (loggedIn === false) {
password = prompt("Enter password for user " + userLogin.username + ".");
if (userLogin.password === password) {
  alert("Welcome back, Mr. President.")
  loggedIn = true;
}
else {
  for (var i = 2; i > 0; i--) {
  alert("Incorrect password! Try again. Remaining attempts : " + i + ".");
  password = prompt("Enter password for user " + userLogin.username + ".");
  if (userLogin.password === password) {
    alert("Welcome back, Mr. President.")
    loggedIn = true;
    break;
        }
      }
      alert("Exceeded maximum number of login attempts!");
      break;
    }
  }
