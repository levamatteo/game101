class Coin {
  constructor() {
    this.r = 48
    this.x = random(w);
    this.y = 0 - this.r;
  }
  display() {
    image(imgh, this.x, this.y, this.r, this.r)
    //rect(this.x, this.y, this.r, this.r)
  }
  move() {
    this.y++;
  }
}
