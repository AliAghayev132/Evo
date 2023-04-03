import AnimationComponent from "../Components/AnimationComponent.js";
import HitboxComponent from "../Components/HitboxComponent.js";
import MovementComponent from "../Components/MovementComponent.js";
import Box from "../Library/box.js";
export default class Entity {
  //Variables

  constructor(width, height, x = 0, y = 0) {
    this.initVariables();
    this.initShape(width, height, x, y);
    this.createAnimationComponent();
  }
  initVariables() {
    this._animationComponent = undefined;
    this._movementComponent = undefined;
    this._hitboxComponent = undefined;
  }
  initShape(width, height, x, y) {
    this._shape = new Box(width, height, x, y);
  }
  createHitboxComponent(
    width,
    height,
    x,
    y,  
    offsetX,
    offsetY,
    color = "green",
  ) {
    this._hitboxComponent = new HitboxComponent(
      width,
      height,
      x,
      y,
      offsetX,
      offsetY,
      color,
    );
  }
  createAnimationComponent() {
    this._animationComponent = new AnimationComponent(this._shape);
  }
  createMovementComponent(acceleration, deceleration, max_velocity) {
    this._movementComponent = new MovementComponent(
      acceleration,
      deceleration,
      max_velocity,
      this._shape,
    );
  }

  getPositionX() {
    return this._shape.getPositionX();
  }
  getPositionY() {
    return this._shape.getPositionY();
  }

  move(dir_x, dir_y) {
    this._movementComponent.move(dir_x, dir_y);
  }
  setTexture(path) {
    this._shape.setTexture(path);
  }
  update(dt) {
    if (this._movementComponent) {
      this._movementComponent.update(dt);
    }
    if (this._hitboxComponent) {
      this._hitboxComponent.update(
        this._shape.getPositionX(),
        this._shape.getPositionY(),
      );
    }
  }
  getHitbox() {
    return this._hitboxComponent.getHitbox();
  }
  render() {
    this._shape.draw();
    if (this._hitboxComponent) {
      this._hitboxComponent.render();
    }
  }
  flipTexture(par) {
    this._shape.flipTexture(par);
  }
}
