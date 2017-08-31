var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybeline', 'Chuck Berry']
];

// print(message) function is used to send HTML to the browser
function print(message) {
  document.write(message);
}

function printSong(songs) {
  var listHTML = '<ol>';
  for (var i = 0; i < songs.length; i++) {
    listHTML += '<li>' + songs[i][0] + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printSong(playList);
