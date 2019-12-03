'use strict'


let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(600, 600);

}

function draw() {
  if (state === 'title') {
    title();
    cnv.mouseClicked(titleMouseClicked);
  } else if (state === 'level1') {
    level1();
    cnv.mouseClicked(level1MouseClicked);
  }
}
// function mousePressed() {
//   state = 'level1'
// }

function title() {
  background(100);
  textSize(60);
  stroke(50);
  text('Claustrophobia', 100, 100);
textSize(20)
  text('click to start', 100, 300)
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level1';
}

function level1() {
  background(50, 150, 200);
}

function level1MouseClicked(){
  console.log('canvas is clicked on lv1');
}
