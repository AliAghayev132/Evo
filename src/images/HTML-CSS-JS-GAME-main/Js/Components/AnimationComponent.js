let sprite;
export default class AnimationComponent {
  #animations = new Map();

  constructor(shape) {
    sprite = shape;
  }

  addAnimation(key, width, height, startX, startY, endX, endY, animationTimer) {
    this.#animations.set(
      key,
      new Animation(width, height, startX, startY, endX, endY, animationTimer),
    );
  }

  playAnimation(key, dt, rect) {
    this.#animations.get(key).updateAnimation(dt, rect);
  }
}
class Animation {
  #timer = 0.0;
  #animationTimer;
  #width;
  #height;
  #startX;
  #startY;
  #currentX;
  #currentY;
  #endX;
  #endY;

  constructor(width, height, startX, startY, endX, endY, animationTimer) {
    this.#animationTimer = animationTimer;
    this.#width = width;
    this.#height = height;
    this.#startX = startX;
    this.#startY = startY;
    this.#endX = endX;
    this.#endY = endY;
    this.#currentX = this.#startX;
    this.#currentY = this.#startY;
  }

  updateAnimation(dt) {
    if (this.#timer >= this.#animationTimer) {
      this.#timer = 0.0;
      if (this.#currentX < this.#endX) {
        this.#currentX++;
      } else {
        this.#currentX = this.#startX;
      }
      if (this.#currentY < this.#endY) {
        this.#currentY++;
      } else {
        this.#currentY = this.#startY;
      }
    }
    this.#timer = this.#timer + 10 / dt;
    // console.log(this.#width * this.#currentX, this.#height * this.#currentY);
    sprite.setRect({
      left: -(this.#width * this.#currentX),
      top: this.#height * this.#currentY,
    });
  }

  resetAnimation() {
    this.#timer = 0.0;
    this.#currentX = this.#startX;
    this.#currentY = this.#startY;
  }
}
