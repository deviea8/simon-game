# Digital Simon // Project 1
## Overview

For project #1, I created a digital version of the classic 80s light-up memory game, Simon!

Once a player lands on the Digital Simon site, they will see the virtual Simon gamepiece (which looks quite identical to the original). They are able to adjust their desired difficulty level (easy or hard), then click the green 'start' button to begin the game. Then the fun begins. Simon will light up a sequence of buttons (playing a corresponding sound for each). The player has to try to repeat the button sequence that Simon played. The sequence will get longer by one each round. If the player matches the sequence correctly, their score will increase by one point, and Simon will move on to the next round. If they play back the sequence incorrectly, it's game over. If the player wants to improve their Simon skills over time, they can view their previous game scores by clicking on the 'View Score History' button underneath the score section. 

**Live site:** http://digital-simon.bitballoon.com/

## Technologies Used

  * Languages - HTML5, CSS3, Javascript, jQuery, Bootstrap, Bootstrap Toggle
  * Design - Google Fonts, Gliffy (wireframing), Custom Favicon
  * Project Planning & User Stories - [Trello](https://trello.com/b/uAKbs96q/simon-game)
  * Sublime Text 3


## Features

  * Ability for users to set difficulty level of button play speed (easy or hard)
  * Start game button
  * Success message display in game
  * Round tracker displayed in game
  * Scoreboard updated with each successful round
  * Play again button upon incorrect sequence
  * Score history slideout displaying all previous scores from that session
  * Adjust gamepiece size on mobile devices


## Wireframes

View wireframes here: https://goo.gl/2pRFRa


## Future Development


  * Enable all features on mobile (difficulty setting currently disabled on mobile)
  * Ability to have multiple players compete
  * Replace setInterval/clearInterval method with promises for button sequence play
