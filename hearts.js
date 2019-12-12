class Coin {
  constructor() {
    this.r = 48
    this.x = random(w);
    this.y = 0 - this.r;
      this.speed = 1.7;
  }
  display() {
    image(imgh, this.x, this.y, this.r, this.r)
    //rect(this.x, this.y, this.r, this.r)
  }
  move() {
    this.y += this.speed;
  }
}
