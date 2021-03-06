var students = [
  { name: 'Jeff', track: 'iOS', achievements: 40, points: 22000 },
  { name: 'Jason', track: 'Front End Development', achievements: 3, points: 2333 },
  { name: 'Ryan', track: 'iOS', achievements: 2, points: 1900 },
  { name: 'Matthew', track: 'iOS', achievements: 3, points: 2433 },
  { name: 'David', track: 'iOS', achievements: 3, points: 2544 }
];
var student;
var studentSearch;
var message = '';

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h1>Student: ' + student.name + '</h1>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.achievements + '</p>';
  report += '<p>Achievements: ' + student.points + '</p>';
  return report;
}

while (true) {
  studentSearch = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
  if (studentSearch === null || studentSearch.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (student.name === studentSearch) {
      message = getStudentReport(student);
      print(message);
    }

  }
}
