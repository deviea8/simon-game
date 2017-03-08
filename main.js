$(function() {

$('#start-button').on('click', generateButtonSequence);
$('.game-button').on('click', playbackHandler)

})

//Audio sounds for activated buttons
var audioButton1 = new Audio('sound1.mp3');
var audioButton2 = new Audio('sound2.mp3');
var audioButton3 = new Audio('sound3.mp3');
var audioButton4 = new Audio('sound4.mp3');

gameIsActive = false;
thisRound = [];
var userPlayback = [];
var roundCounter = 1;

var generateButtonSequence = function() {
  if (roundCounter > 1) {
    userPlayback.length = 0;
    for (var i = 0; i < roundCounter-1; i++) {
      activateButton(thisRound[i]);
      thisRound.shift();
    }
  }
  var randomButton = generateRandom();
  activateButton(randomButton);
  roundCounter++;
  console.log(thisRound)
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

var playbackHandler = function() {
  var thisButton = $(this).attr('value');
  userPlayback.push(thisButton);
  checkForMatch();
  console.log(userPlayback);
}

var checkForMatch = function() {
  var a = userPlayback.toString();
  var b = thisRound.toString();
  if (userPlayback.length === thisRound.length) {
    if (a === b) {
      console.log('its a match')
    }
  }
}


// var playbackHandler = function() {
//   $('.game-button').on('click', checkForMatch());
//   var thisButton = $(this).attr('value');
//   userPlayback.push(thisButton);
//   roundCounter++;
// }
