$(function() {

$('.start-button').on('click', startGame);
$('.game-button').on('click', playbackHandler);

})

// Game settings & arrays.
var active = false;
var thisRound = [];
var userPlayback = [];
var roundCounter = 0;
var userScore = 0;
var buttonFlashTime = 600;
var numGamesPlayed = 0;

// Start game for the first time.
var startGame = function() {
  startRound();
  numGamesPlayed++
}

// Start game/round.
var startRound = function() {
  setTimeout(generateButtonSequence,1000);
  incrementRound();
  hideStartButton();
  makeCutoutNotClickable();
  active = true;
}

//Make middle section of board not clickable.
var makeCutoutNotClickable = function() {
$('.cutout').css('pointer-events','none');
}

//Make middle section of board clickable again.
var makeCutoutClickable = function() {
$('.cutout').css('pointer-events','auto');
}

// Hide start button after game begins.
var hideStartButton = function() {
  $('.start-button').addClass('start-button-hidden').removeClass('start-button')
}

// Empty user's playback sequence for next round.
var emptyUserSequence = function() {
  userPlayback.length = 0;
}

// Move to next round.
var incrementRound = function() {
  roundCounter++;
  updateRoundCountInUI();
}

//Update round number in UI.
var updateRoundCountInUI = function() {
  $('.round-count').text(roundCounter);
}

// Adjust user's score.
var incrementScore = function() {
  userScore++;
  updateScoreInUI();
}

// Update user's score in UI.
var updateScoreInUI = function() {
  $('.score').text('Score: ' + (userScore));
}

// Creates & plays button sequence based on round number.
var generateButtonSequence = function() {
    nextButtonInSequence();
    emptyUserSequence();
    animate(thisRound);
}

// Generates next random button in sequence.
var nextButtonInSequence = function() {
  var randomButton = generateRandom();
  thisRound.push(randomButton);
}

// Set delay for button sequence. Note: Not working as intended.
function delayButtonActivate(i) {
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
      $(".button1").addClass('flash-green');
      window.setTimeout(function() {
        $('.button1').removeClass('flash-green');
       }, 200);
      audioButton1.play();
      break;
    case 'button2':
      $(".button2").addClass('flash-red');
      window.setTimeout(function() {
        $('.button2').removeClass('flash-red');
       }, 200);
      audioButton2.play();
      break;
    case 'button3':
      $(".button3").addClass('flash-yellow');
      window.setTimeout(function() {
        $('.button3').removeClass('flash-yellow');
       }, 200);
      audioButton3.play();
      break;
    case 'button4':
      $(".button4").addClass('flash-blue');
      window.setTimeout(function() {
        $('.button4').removeClass('flash-blue');
       }, 200);
      audioButton4.play();
      break;
  }
}

// Loop through each button in game array and activate.
function animate(sequence) {
  var i = 0;
  var interval = setInterval(function() {
    activateButton(sequence[i]);
      i++;
      if (i >= sequence.length) {
        clearInterval(interval);
      }
  }, buttonFlashTime);
}

// Creates array from user's playback sequence.
var playbackHandler = function() {
  if (active === true){
    var thisButton = $(this).attr('value');
    userPlayback.push(thisButton);
    activateButton(thisButton);
    checkForMatch();
  }
}

// Checks to see if user's playback matches game sequence.
var checkForMatch = function() {
  for (var i = 0; i < userPlayback.length; i++) {
    if (userPlayback[i] !== thisRound[i]) {
      wrongInput();
      return
    }
  }
    if (userPlayback.length === thisRound.length) {
      incrementScore();
      startRound();
      displaySuccessMessage();
  }
}

// Display success message to user upon successful sequence input.
var displaySuccessMessage = function() {
  var successMessage = $("<div class='success-message'>Correct!</div>");
  $(successMessage).insertAfter('.score-and-green-button');
    window.setTimeout(function() {
      $(successMessage).remove();
    }, 600);
}

// Actions to execute if user enters wrong sequence.
var wrongInput = function() {
  resetGameSettings();
  addTryAgainButton();
  wrongInputSound();
  makeCutoutClickable();
  active = false;
  addToScoreboard();
}

var addToScoreboard = function() {
  var scoreboardListItem = $("<div>Game " + numGamesPlayed + ":</div><div>" + userScore + "</div><br>");
  $('.top-score-list').append(scoreboardListItem);
}

// Sounds for wrong user button press.
var wrongInputSound = function() {
  wrongButton.play();
  youLose.play();
}

// Reset all game settings to 0.
var resetGameSettings = function() {
  userPlayback.length = 0;
  thisRound.length = 0;
  roundCounter = 0;
}

// Add 'try again' button when user gets sequence wrong.
var addTryAgainButton = function() {
  var startButton = $('<br><div class="try-again"><button class ="try-again-button">New Game</button></div>');
  $('.score-and-green-button').text('Sorry, wrong sequence.');
  $(startButton).insertAfter('.score-and-green-button');
  listenForClicksOnStartNewGame();
}

// Listen for clicks on 'Start New Game' button
var listenForClicksOnStartNewGame = function() {
  $('.try-again-button').on('click', startNewGame);
}

// Begin new game after incorrect sequence.
var startNewGame = function() {
  active = true;
  userScore = 0;
  updateScoreInUI();
  startRound();
  hideTryAgainButton();
  restoreRoundDisplay();
  numGamesPlayed++;
}

// Hide 'try again' button
var hideTryAgainButton = function() {
  $('.try-again-button').addClass('try-again-button-hidden');
}

// Restore round counter display in UI.
var restoreRoundDisplay = function() {
  $('.score-and-green-button').html("<div class='round-display'><div class='round-label'>Round</div><div class='round-count'>1</div></div>")
}

// Audio sounds for activated buttons.
var audioButton1 = new Audio('sound1.mp3');
var audioButton2 = new Audio('sound2.mp3');
var audioButton3 = new Audio('sound3.mp3');
var audioButton4 = new Audio('sound4.mp3');
var wrongButton = new Audio('wrong.mp3');
var youLose = new Audio('womp-womp.mp3');

// Opens score history slideout.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Closes score history slideout.
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
