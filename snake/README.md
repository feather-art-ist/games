# SNAKE
I created this file to work with events on a page.
Now I have to do a few changes:
  - Possibilities (canPressUp, canPressRight, canPressDown, canPressLeft) should be in a object 'UserCan' or 'User'.
  - In the check, for example 'if((e.code === 'KeyW' || e.code === 'ArrowUp') && canPressUp){...}' should be 'if( ['KeyW', 'ArrowUp'].includes(e.code) && canPressUp){...}'.
  - Hero's movement methods can be transferred to another object. 'HeroMovement' or 'HeroMove', for example.
  - 'startGame()' should be in a cycle.
Now I have no time for theese ones.
And the game has a bug:
  - the snake dies later than necessary.
