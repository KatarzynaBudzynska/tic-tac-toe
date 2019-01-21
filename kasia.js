var NL = '<br />';

function echo(something) {

  document.write(something + NL);
}
$(function() {


  var currentPlayer = "o";

    $('.space').click(function(){
      if (currentPlayer == "o") {
        $(this).css('background-image', 'url("kolo.png")');

        currentPlayer = "x";
      }

      else if (currentPlayer == "x") {
        $(this).css('background-image', 'url("x.png")');

        currentPlayer = "o";
      }
    });







});









function generateRandomLotto() {
  var selected = [];
  for (var x=1; x<=6; x++) {
    var randmNumber = Math.floor(Math.random()*100);
    while (randmNumber < 0 || randmNumber > 49 || (selected.indexOf(randmNumber) > -1)) {
      randmNumber = Math.floor(Math.random()*100);
    }
    selected.push(randmNumber);
  }
  return selected;
}

function doIWin(generated, myNumbers) {

  var howMenyHits = 0;
  for (var i = 0; i < generated.length; i++) {
    for (var j = 0; j < myNumbers.length; j++) {
      if (generated[i] === myNumbers[j]) {
        howMenyHits = howMenyHits + 1;
      }
    }
  }
  return howMenyHits;
}
/////////////////////////////////////////////////////////////////////////////////

var myLuckyNumbers = [3, 6, 9, 23, 12, 21];

for (var dzien = 1; dzien <= 10000; dzien++) {
  var generated = generateRandomLotto();
  // echo(dzien + " - " + doIWin(generated, myLuckyNumbers));
}



// echo(generated);

for (var x=1; x<=5; x++) {
    // document.write("To jest przykładowe zdanie "+ x + NL); //wypisze sie 3 razy

}
