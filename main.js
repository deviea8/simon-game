$(function() {

$('#start-button').on('click', gameHandler);

})

//Audio sounds for activated buttons
var audioButton1 = new Audio('sound1.mp3');
var audioButton2 = new Audio('sound2.mp3');
var audioButton3 = new Audio('sound3.mp3');
var audioButton4 = new Audio('sound4.mp3');

// Flash functionality for activated buttons
function flash() {
    $('.highlight').fadeOut(500);
    $('.highlight').fadeIn(500);
}

gameIsActive = false;
thisRound = [];
var roundCounter = 1;

var gameHandler = function() {
  if (gameIsActive === false) {
    activateSequence();
  }
  else {
    console.log('Game is already active');
  }
 };

var activateSequence = function() {
    generateButtonSequence();
  }


var generateButtonSequence = function() {
  var randomButton = generateRandom();
  activateButton(randomButton);
  console.log('sequence generated')
}

var generateRandom = function() {
  var buttonNum = Math.random() * (5-1) + 1;
  return 'button' + Math.floor(buttonNum);
}

// Actions associated with each button being 'activated'

var activateButton = function(randomButton) {
  console.log(randomButton + ' activated');
  switch (randomButton) {
    case 'button1':
      $(".button1").fadeTo(100, 0.1).fadeTo(200, 1.0);
      audioButton1.play();
      thisRound.push(randomButton);
      break;
    case 'button2':
      $(".button2").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton2.play();
      thisRound.push(randomButton);
      break;
    case 'button3':
      $(".button3").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton3.play();
      thisRound.push(randomButton);
      break;
    case 'button4':
      $(".button4").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton4.play();
      thisRound.push(randomButton);
      break;
  }
}


