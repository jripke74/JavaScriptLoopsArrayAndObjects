var questionList = [
  ['How many legs do dogs have?', 4],
  ['How old am I?', 43],
  ['How many kids do I have?', 3],
  ['Is the moon bigger than the earth?', 0]
];
var numberOfCorrectAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

// print(message) function is used to send HTML to the browser
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i++) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questionList.length; i++) {
  question = questionList[i][0];
  answer = questionList[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    numberOfCorrectAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }

}
html = "<h1>You got " + numberOfCorrectAnswers + " question(s) correct.</h1>"
html += '<h2>You got thise questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these question wrong:</h2>';
html += buildList(wrong);
print(html);
