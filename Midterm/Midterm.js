let myFirstSound;
let mySecondSound;
let myThirdSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('Bruh.wav', soundLoaded);
  mySecondSound = loadSound('CartoonBongos.wav', soundLoaded);
  myThirdSound = loadSound('ReverbedFart.wav', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'J' 'K' or 'L' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
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
}

function playFirstSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}

function playSecondSound() {
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
}