'use strict'


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
function setup() {
  cnv = createCanvas(w, h);

textFont ('monospace');
}

function draw() {
  switch (state) {
    case 'title':
    title();
    cnv.mouseClicked(titleMouseClicked);
    break;
    case 'level1':
    level1();
    cnv.mouseClicked(level1MouseClicked);
    break;
    case 'you lose':
    youLose();
        cnv.mouseClicked(youLoseMouseClicked);
    break;
  default:
  break;
  }
  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // } else if (state === 'level1') {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // }
}

function title() {
  background(100);
  textSize(60);
  stroke(50);
  text('Claustrophobia', w/6, h/6);
  textSize(20)
  text('click to start', w/3, h/2)
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level1';
}

function level1() {

  background(50, 150, 200);
  text('click for points', w/2, h-60)
  rect(100, 100, 48, 48)
}

function level1MouseClicked() {
    points++;
  console.log('points = ' + points);
if (points >= 10){
  state = 'you lose'
}
}

function youLose(){
  background(100);
  textSize(60);
  stroke(50);
  text('You Lose', 100, 100);
  textSize(20)

}

function youLoseMouseClicked(){
  console.log('canvas is clicked on you lose page');
  state = 'title';
  points = 0;
}
