'use strict'


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let enemies0 = [];
let enemies = [];
let enemies1 = [];
let wallEnemies = [];
let wallEnemies1 = [];
let img;
let imgpu;
let imgpd;
let imgpl;
let imgpr;
let imgh;
let imge0;
let imge;
let imge1;
let imgew;
let imgew1;
let imgt;
let imgl;
let wallWidth = 10;
let wallWidth2 = 10;
let wallWidth3 = 10;

function preload() {
  img = loadImage('images/Background1.png');
  imgpd = loadImage('images/knightdown.png');
  imgpu = loadImage('images/knightup.png');
  imgpl = loadImage('images/knightleft.png');
  imgpr = loadImage('images/knightright.png');
  imgh = loadImage('images/Heart.png');
  imge = loadImage('images/Enemy.png');
  imgt = loadImage('images/Title.png');
  imgl = loadImage('images/YouLose.png');
  imgew = loadImage('images/EnemyWall.png');
  imgew1 = loadImage('images/EnemyWall1.png');
  imge0 = loadImage('images/Enemy0.png');
  imge1 = loadImage('images/Enemy1.png');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');
  cnv = createCanvas(w, h);
  rectMode(CENTER)
  player = new Player();

  // coins [0] = new Coin();
  coins.push(new Coin());
  enemies0.push(new Enemy0());
  enemies.push(new Enemy());
  enemies1.push(new Enemy1());
  wallEnemies.push(new EnemyWall());
  wallEnemies1.push(new EnemyWall1());
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
    case 'level3':
      level3();
      cnv.mouseClicked(level3MouseClicked);
      break;
    case 'you win2':
      youWin2();
      cnv.mouseClicked(youWin2MouseClicked);
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
  textSize(30);
  stroke(50);
  text('Use arrowkeys to move', w / 4.2, h - 110);
  text('Press "space" to stop moving', w / 7.5, h - 60)
}

function titleMouseClicked() {
  state = 'level3';
  console.log('canvas is clicked on title page');

}

function level1() {

  background(img);
  // text('click for points', w / 2, h - 60)

  if (random(.6) <= 0.01) {
    coins.push(new Coin());

  }
  if (random(.8) <= 0.01) {
    enemies0.push(new Enemy0());

  }



  player.display();
  player.move();




  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();


  }

  for (let i = 0; i < enemies0.length; i++) {
    enemies0[i].display();
    enemies0[i].move();
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

  for (let i = enemies0.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies0[i].x, enemies0[i].y) <= (player.r + enemies0[i].r) / 2) {
      points -= 5;
      // console.log(points);
      enemies0.splice(i, 1);
    } else if (enemies0[i].y > h) {
      enemies0.splice(i, 1);
      console.log('e out');
    }
  }
  // if (player.x < (wallWidth/2) || player.x > (w - wallWidth/2)) {
  //   points = -1
  // };
  fill(0);
  rect(0, h / 2, wallWidth, 601)
  rect(w, h / 2, wallWidth, 601)

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
  background(imgl);
  // textSize(60);
  // stroke(50);
  // text('You Lose', 100, 100);
  // textSize(20)

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

  if (random(1.5) <= 0.01) {
    wallEnemies.push(new EnemyWall());

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

  for (let i = 0; i < wallEnemies.length; i++) {
    wallEnemies[i].display();
    wallEnemies[i].move();
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
      wallWidth2 += 70;
      console.log(wallWidth2);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      // console.log('e out');
    }
  }
  for (let i = wallEnemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, wallEnemies[i].x, wallEnemies[i].y) <= (player.r + wallEnemies[i].r) / 2) {
      // points -= 5;
      wallWidth2 += 100;
      console.log(wallWidth2);
      wallEnemies.splice(i, 1);
    } else if (wallEnemies[i].y > h) {
      wallEnemies.splice(i, 1);
      // console.log('e out');
    }
  }
  // if (player.x < (wallWidth/2) || player.x > (w - wallWidth/2)) {
  //   points = -1
  // };
  stroke(0);
  fill(0);
  rect(0, h / 2, wallWidth2, 601);
  rect(w, h / 2, wallWidth2, 601);

  rect(h / 2, h, 601, wallWidth2);
  rect(h / 2, 0, 601, wallWidth2);


  fill(255);
  textSize(20);
  stroke(50);
  text(`points: ${points}`, w / 2, h - 30);

  if (wallWidth2 > 515) {
    state = 'you lose'
  }
  if (points >= 15) {
    state = 'you win2'
  }
}

function level2MouseClicked() {
  // points++;
  console.log('canvas clicked lv2');
  // if (points >= 10) {
  //   state = 'you lose'
  // }
}

function youWin2() {
  fill(0)
  background(100);
  textSize(60);
  stroke(50);
  text('You Win', 100, 100);
  textSize(20)
  text('Click For Next Level', 100, 150);
}

function youWin2MouseClicked() {
  console.log('canvas is clicked on you win2 page');
  state = 'level3';
  points = 0;
}

function level3() {

  background(img);
  // text('click for points', w / 2, h - 60)

  if (random(.3) <= 0.01) {
    coins.push(new Coin());

  }
  if (random(.9) <= 0.01) {
    enemies1.push(new Enemy1());

  }

  if (random(2) <= 0.01) {
    wallEnemies1.push(new EnemyWall1());

  }

  player.display();
  player.move();


  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();


  }

  for (let i = 0; i < enemies1.length; i++) {
    enemies1[i].display();
    enemies1[i].move();
    // console.log(i);

  }

  for (let i = 0; i < wallEnemies1.length; i++) {
    wallEnemies1[i].display();
    wallEnemies1[i].move();
    // console.log(i);

  }

  for (let i = coins.length - 1; i >= 0; i--) {

    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      wallWidth3 -= 100;;
      // console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      // console.log('h out');
    }
  }

  for (let i = enemies1.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies1[i].x, enemies1[i].y) <= (player.r + enemies1[i].r) / 2) {
      // points -= 5;
      wallWidth3 += 35;
      console.log(wallWidth3);
      enemies1.splice(i, 1);
    } else if (enemies1[i].y > h) {
      enemies1.splice(i, 1);
      // console.log('e out');
    }
  }
  for (let i = wallEnemies1.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, wallEnemies1[i].x, wallEnemies1[i].y) <= (player.r + wallEnemies1[i].r) / 2) {
      // points -= 5;
      wallWidth3 += 50;
      console.log(wallWidth3);
      wallEnemies1.splice(i, 1);
    } else if (wallEnemies1[i].y > h) {
      wallEnemies1.splice(i, 1);
      // console.log('e out');
    }
  }
  // if (player.x < (wallWidth/2) || player.x > (w - wallWidth/2)) {
  //   points = -1
  // };
  stroke(0);
  fill(0);

  rect(0, h / 2, wallWidth3, 601);
  rect(w, h / 2, wallWidth3, 601);

  rect(h / 2, h, 601, wallWidth3);
  rect(h / 2, 0, 601, wallWidth3);

  wallWidth3 -= .2;

  // fill(255);
  // textSize(20);
  // stroke(50);
  // text(`points: ${points}`, w / 2, h - 30);

  if (wallWidth3 > 515) {
    state = 'you lose'
  }
  // if (points >= 15) {
  //   state = 'you win1'
  // }
}

function level3MouseClicked() {
  // points++;
  console.log('canvas clicked lv3');
  // if (points >= 10) {
  //   state = 'you lose'
  // }
}
