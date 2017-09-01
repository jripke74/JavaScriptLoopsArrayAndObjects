var students = [
  { name: 'Jeff', track: 'iOS', achievements: 40, points: 22000 },
  { name: 'Jason', track: 'Front End Development', achievements: 3, points: 2333 },
  { name: 'Ryan', track: 'iOS', achievements: 2, points: 1900 },
  { name: 'Matthew', track: 'iOS', achievements: 3, points: 2433 },
  { name: 'David', track: 'iOS', achievements: 3, points: 2544 }
];
var html;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i++) {
  html += '<h1>Student: ' + students[i].name + '</h1>'
  html += '<p>Track: ' + students[i].track + '</p>'
  html += '<p>Points: ' + students[i].achievements + '</p>'
  html += '<p>Achievements: ' + students[i].points + '</p>'
}

print(html);
