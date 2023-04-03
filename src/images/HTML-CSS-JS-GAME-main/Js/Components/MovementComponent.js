import bs from "../Library/basic.js";
export default class MovementComponent {
  #acceleration;
  #deceleration;
  #maxVelocity;
  #box;
  #velocity = new bs.Vector2i(0, 0);

  constructor(acceleration, deceleration, maxVelocity, box) {
    this.#acceleration = acceleration;
    this.#deceleration = deceleration;
    this.#maxVelocity = maxVelocity;
    this.#box = box;
  }

  getVelocityX() {
    return this.#velocity.x;
  }
  getVelocityY() {
    return this.#velocity.y;
  }
  getVeloctiy() {
    return this.#velocity;
  }
  stopVelocity() {
    this.#velocity.x = 0.0;
    this.#velocity.y = 0.0;
  }
  move(dir_x, dir_y) {
    this.#velocity.x = this.#velocity.x + (this.#acceleration * dir_x);
    this.#velocity.y = this.#velocity.y + (this.#acceleration * dir_y);
  }
  update(dt) {
    if (this.#velocity.x > 0.0) {
      if (this.#velocity.x > this.#maxVelocity)
        this.#velocity.x = this.#maxVelocity;

      this.#velocity.x -= this.#deceleration;
      if (this.#velocity.x < 0.0) this.#velocity.x = 0.0;
    }
    else if (this.#velocity.x < 0.0) {
      if (this.#velocity.x < -this.#maxVelocity)
        this.#velocity.x = -this.#maxVelocity;

      this.#velocity.x += this.#deceleration;
      if (this.#velocity.x > 0.0) this.#velocity.x = 0.0;
    }
    let temp = (this.#velocity.x / dt).toFixed(2);
    this.#box.moveObject(Number(temp), this.#velocity.y / dt);
  }
}
