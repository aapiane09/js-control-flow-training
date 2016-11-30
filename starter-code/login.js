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
  alert("Incorrect password!");
  break;
  }
}
