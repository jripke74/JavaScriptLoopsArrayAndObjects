var person = {
  name: 'Sarah',
  country: 'US',
  age: 35,
  treehouseStudent: true,
  skills: ['Swift', 'Objective-C', 'HTML', 'CSS', 'JavaScript', 'Python']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = "Jeff";
message += '<p>Hello. My name is ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>';
print(message);

for (prop in person) {
  console.log(prop + ':  ', person[prop]);
}
