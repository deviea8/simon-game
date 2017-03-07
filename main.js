$(function() {

$('#start-button').on('click', startGameHandler);

})

//Audio Sounds for Activated Buttons

  var audioButton1 = new Audio('sound1.mp3');
  var audioButton2 = new Audio('sound2.mp3');
  var audioButton3 = new Audio('sound3.mp3');
  var audioButton4 = new Audio('sound4.mp3');

gameIsActive = false;

currentGame = []

var startGameHandler = function() {
  if (gameIsActive === false) {
    gameStart();
  }
  else {
    console.log('Game is already active');
  }
 };

var gameStart = function() {
  var randomButton = generateRandom();
  activateButton(randomButton);
}

var generateRandom = function() {
  var buttonNum = Math.random() * (5-1) + 1;
  return 'button' + Math.floor(buttonNum);
}

var activateButton = function(randomButton) {
  console.log(randomButton + ' activated');
  switch (randomButton) {
    case 'button1':
      $(".button1").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton1.play();
      currentGame.push(randomButton);
      break;
    case 'button2':
      $(".button2").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton2.play();
      currentGame.push(randomButton);
      break;
    case 'button3':
      $(".button3").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton3.play();
      currentGame.push(randomButton);
      break;
    case 'button4':
      $(".button4").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton4.play();
      currentGame.push(randomButton);
      break;
  }
}

function flash() {
    $('.highlight').fadeOut(500);
    $('.highlight').fadeIn(500);
}


