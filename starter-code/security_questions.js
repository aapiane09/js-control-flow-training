console.log("security_questions.js loaded");
var answer;
var securityQuestions = [
  object1 = {
    question : "What is your name?", expectedAnswer : "My name is Sir Arthur of Camelot."
  },
  object2 = {
    question : "What is your quest?", expectedAnswer : "To seek the holy grail."
  },
  object3 = {
    question : "What is the airspeed velocity of an unladen swallow?", expectedAnswer : "African or European Swallow?"
  }];

for (var i = 0; i < securityQuestions.length; i++) {
  answer = prompt(securityQuestions[i].question);
  if (answer != securityQuestions[i].expectedAnswer) {
    alert("Begone, knave!");
    var failedStatement = true;
    break;
  }
}
if (failedStatement != true) {
alert("You may pass.")}
