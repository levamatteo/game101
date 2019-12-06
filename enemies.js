class Enemy {
  constructor() {
    this.r = 48
    this.x = random(w);
    this.y = 0 - this.r;
  }
  display() {
    image(imge, this.x, this.y, this.r, this.r)
    //rect(this.x, this.y, this.r, this.r)
  }
  move() {
    this.y++/.5;
  }
}
