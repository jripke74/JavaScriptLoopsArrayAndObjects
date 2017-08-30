var html = '';
var red;
var green;
var blue;
var rgbColor;

function getRandomNumber() {
  var num = Math.floor(Math.random() * 256);
  return num;
}

for (var i = 1; i <= 100; i += 1) {
  red = getRandomNumber();
  green = getRandomNumber();
  blue = getRandomNumber();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
