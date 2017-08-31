var shopping = [
  'carrots',
  'milk',
  'eggs'
];
console.log(shopping[0]);
console.log(shopping[1]);
console.log(shopping[2]);
// this will respond with undefined because it does not exist in the array
console.log(shopping[3]);

var playList = [];
// push adds item to end of array
playList.push('I did it my way');
playList.push('Respect');
// unshift adds item to beginning of array
playList.unshift('Louie Louie');
playList.unshift('Maybeline');
playList.unshift('Born to Run');

function print(message) {
  document.write(message);
}

function printList(list) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i++) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);
