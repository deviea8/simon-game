$(function() {

$('#start-button').on('click', generateButtonSequence);
$('.game-button').on('click', playbackHandler)

})

// Game settings & arrays.
var thisRound = [];
var userPlayback = [];
var roundCounter = 1;

// Empty user's playback sequence for next round.
var emptyUserSequence = function() {
  userPlayback.length = 0;
}

// Move to next round.
var incrementRound = function() {
  roundCounter++;
  $('.round-count').text(roundCounter);
}

// Adjust user's score.
var incrementScore = function() {
  $('.score').text('Score: ' + (roundCounter-1));
}

// Creates & plays button sequence based on round number.

var generateButtonSequence = function() {
  if (roundCounter > 1) {
    emptyUserSequence();
    for (var i = 0; i < roundCounter-1; i++) {
      setDelay(i);
    }
  }
  var randomButton = generateRandom();
  activateButton(randomButton);
  thisRound.push(randomButton);
}

// Generates next random button in sequence.

var nextButtonInSequence = function() {
  var randomButton = generateRandom();
  activateButton(randomButton);
  thisRound.push(randomButton);
}

// Set delay for button sequence. Note: Not working as intended.

function setDelay(i) {
  setTimeout(function() {
    activateButton(thisRound[i]);
  }, 1000);
}

// Generate a random number and match it with a button.

var generateRandom = function() {
  var buttonNum = Math.random() * (5-1) + 1;
  return 'button' + Math.floor(buttonNum);
}

// Actions associated with activated buttons (blink, sound).

var activateButton = function(randomButton) {
  switch (randomButton) {
    case 'button1':
      $(".button1").fadeTo(100, 0.1).fadeTo(200, 1.0);
      audioButton1.play();
      break;
    case 'button2':
      $(".button2").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton2.play();
      break;
    case 'button3':
      $(".button3").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton3.play();
      break;
    case 'button4':
      $(".button4").fadeTo(100, 0.1).fadeTo(200, 1.0)
      audioButton4.play();
      break;
  }
}

// Creates array from user's playback sequence.

var playbackHandler = function() {
  var thisButton = $(this).attr('value');
  activateButton(thisButton);
  userPlayback.push(thisButton);
  checkForMatch();
}

// Checks to see if user's playback matches game sequence.

var checkForMatch = function() {
  var a = userPlayback.toString();
  var b = thisRound.toString();
  if (userPlayback.length === thisRound.length) {
    if (a === b) {
      console.log('its a match')
      incrementRound();
      incrementScore();
    }
  }
}

// Audio sounds for activated buttons.

var audioButton1 = new Audio('sound1.mp3');
var audioButton2 = new Audio('sound2.mp3');
var audioButton3 = new Audio('sound3.mp3');
var audioButton4 = new Audio('sound4.mp3');
