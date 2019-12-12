class EnemyWall {
  constructor() {
    this.r = 96
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 1.5;
  }
  display() {
    image(imge, this.x, this.y, this.r, this.r/2)
    //rect(this.x, this.y, this.r, this.r)
  }
  move() {
    this.y += this.speed;
  }
}
