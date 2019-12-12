'use strict'


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let enemies = [];
let img;
let imgp;
let imgh;
let imge;
let imgt;
let wallWidth = 10;
let wallWidth2 = 10;
function preload() {
  img = loadImage('images/Background1.png');
  imgp = loadImage('images/knight.png');
  imgh = loadImage('images/Heart.png');
  imge = loadImage('images/Enemy.png');
  imgt = loadImage('images/Title.png');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');
  cnv = createCanvas(w, h);
  rectMode(CENTER)
  player = new Player();

  // coins [0] = new Coin();
  coins.push(new Coin());
  enemies.push(new Enemy());
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
      case 'you win1':
        youWin1();
        cnv.mouseClicked(youWin1MouseClicked);
        break;
        case 'level2':
          level2();
          cnv.mouseClicked(level2MouseClicked);
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

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still'
  }
}

function title() {
  background(imgt);
  // textSize(60);
  // stroke(50);
  // text('Claustrophobia', w / 6, h / 6);
  // textSize(20)
  // text('click to start', w / 3, h / 2)
}

function titleMouseClicked() {
  state = 'level2';
  console.log('canvas is clicked on title page');

}

function level1() {

  background(img);
  // text('click for points', w / 2, h - 60)

  if (random(.1) <= 0.01) {
    coins.push(new Coin());

  }
  if (random(.9) <= 0.01) {
    enemies.push(new Enemy());

  }

  player.display();
  player.move();




  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();


  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
    // console.log(i);

  }

  for (let i = coins.length - 1; i >= 0; i--) {

    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      // console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      console.log('h out');
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points -= 5;
      // console.log(points);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      console.log('e out');
    }
  }
  // if (player.x < (wallWidth/2) || player.x > (w - wallWidth/2)) {
  //   points = -1
  // };
fill(0);
rect(0, h/2, wallWidth, 601)
rect(w, h/2, wallWidth, 601)

//WAALLL SPPPPPEDEED
wallWidth += .15;

  textSize(20);
  stroke(50);
  fill(255)
  text(`points: ${points}`, w / 2, h - 30);
noFill()
  if (points < 0) {
    state = 'you lose'
  }
  if (points >= 15) {
    state = 'you win1'
  }
}

function level1MouseClicked() {
  // points++;
  console.log('canvas clicked lv1');
  // if (points >= 10) {
  //   state = 'you lose'
  // }
}

function youLose() {
  background(100);
  textSize(60);
  stroke(50);
  text('You Lose', 100, 100);
  textSize(20)

}

function youLoseMouseClicked() {
  console.log('canvas is clicked on you lose page');
  state = 'title';
  points = 0;
}

function youWin1() {
fill(0)
  background(100);
  textSize(60);
  stroke(50);
  text('You Win', 100, 100);
  textSize(20)
  text('Click For Next Level', 100, 150);
}

function youWin1MouseClicked() {
  console.log('canvas is clicked on you win page');
  state = 'level2';
  points = 0;
}

function level2() {


  background(img);
  // text('click for points', w / 2, h - 60)

  if (random(.65) <= 0.01) {
    coins.push(new Coin());

  }
  if (random(.6) <= 0.01) {
    enemies.push(new Enemy());

  }

  player.display();
  player.move();




  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();


  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
    // console.log(i);

  }

  for (let i = coins.length - 1; i >= 0; i--) {

    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      // console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      // console.log('h out');
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      // points -= 5;
      wallWidth2 += 100;
      console.log(wallWidth2);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      // console.log('e out');
    }
  }
  // if (player.x < (wallWidth/2) || player.x > (w - wallWidth/2)) {
  //   points = -1
  // };
fill(0);
rect(0, h/2, wallWidth2, 601)
rect(w, h/2, wallWidth2, 601)

rect(h/2, h, 601, wallWidth2)
rect(h/2, 0, 601, wallWidth2)


fill(255)
  textSize(20);
  stroke(50);
  text(`points: ${points}`, w / 2, h - 30);

  if (wallWidth2 > 515) {
    state = 'you lose'
  }
  if (points >= 15) {
    state = 'you win1'
  }
}

function level2MouseClicked() {
  // points++;
  console.log('canvas clicked lv2');
  // if (points >= 10) {
  //   state = 'you lose'
  // }
}
