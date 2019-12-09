
let points = 0;
let w = 600;
let h = 600;
let player;
let state = 'level1';
let img;
let imgp;
let imgh;
let imge;
let imgt;
let wallWidth = 10;

function preload() {
  img = loadImage('../images/Background1.png');
  imgp = loadImage('../images/knight.png');
  imgt = loadImage('../images/Title.png');
}
function setup() {
createCanvas(w, h);

  textFont('monospace');

}

function draw() {
  // switch (state) {
  //   case 'level1':
  //     level1();
  //     cnv.mouseClicked(level1MouseClicked);
  //     break;
  //
  //   default:
  //     break;
}
function level1() {



  background(img);
  player.display();
  player.move();
}
