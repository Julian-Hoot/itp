# Midterm
 
## Link to project
https://editor.p5js.org/Julian-Hoot/full/NJA8c1GcJ
 
## What I did
First I copied lines 54-86 from the 'Functins' code along. I inserted the file name of my first sound into the code and tested it. It worked. I chaged the key from 'P' to 'J', since I wanted to use the keys J, K, and L for my project.
Next I created 'mySecondSound' and 'myThirdSound' variables.

`let mySecondSound;
let myThirdSound;`

I added the K and L keys to the 'key pressed' function. I used if statements to distinguish between all three keys.

`function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'j') {
    playFirstSound();
  }
  if (key.toLowerCase() === 'k') {
    playSecondSound();
  }
  if (key.toLowerCase() === 'l') {
    playThirdSound();
  }
}`

Finally, I created 'playSecondSound' and 'playThirdSound' functions. This made the program recognize the other keys being pressed and caused the sounds to play.

`function playSecondSound() {
  if (mySecondSound.isLoaded()) {
    mySecondSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playThirdSound() {
  if (myThirdSound.isLoaded()) {
    myThirdSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`

## ABDYD
Other than a couple syntax errors (forgetting a capital letter, putting a semicolon in the wrong spot, etc), using the code along as a starting point and building up from there was fairly straightforward.