'use strict'


let state = 'title';
let cnv;
let points = 0;

function setup() {
  cnv = createCanvas(600, 600);

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
  text('Claustrophobia', 100, 100);
  textSize(20)
  text('click to start', 100, 300)
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level1';
}

function level1() {

  background(50, 150, 200);
  text('click for points', 200, 200)
}

function level1MouseClicked() {
  console.log('points = ' + points);
  points++;
}
