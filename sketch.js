var song;
function preload(){
  song = loadSound("rainbow.mp3");
}
function setup() {
  createCanvas(400, 400);
  song.play();
}

function draw() {
  background(220);
}
