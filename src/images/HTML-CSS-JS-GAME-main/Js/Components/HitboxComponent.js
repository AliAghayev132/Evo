import Box from "../Library/box.js";

export default class HitboxComponent {
  #hitbox;
  #offSetX;
  #offsetY;
  #currentBool = false;
  constructor(width, height, x, y, offsetX, offsetY, color) {
    this.#offSetX = offsetX;
    this.#offsetY = offsetY;
    this.#hitbox = new Box(width, height, x + offsetX, y + offsetY);
    this.#hitbox.setBorder(color, 1);
  }
  getHitbox() {
    return this.#hitbox;
  }
  getContains() {
    return this.#currentBool;
  }
  setOffset(x, y) {
    this.#offSetX = x;
    this.#offsetY = y;
  }
  update(x = 0, y = 0) {
    this.#hitbox.setPositions(x + this.#offSetX, y + this.#offsetY);
  }
  render() {
    this.#hitbox.draw();
  }
  contains(hitbox) {
    this.#currentBool =
      this.#hitbox.getPositionX() + this.#hitbox.getSize().width >=
        hitbox.getPositionX() &&
      hitbox.getPositionX() + hitbox.getSize().width >=
        this.#hitbox.getPositionX();
  }
}
