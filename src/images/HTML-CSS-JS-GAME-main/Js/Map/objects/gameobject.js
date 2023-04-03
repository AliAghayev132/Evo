import InteractionButton from "../../İnfo/InteractionButton.js";
import Box from "../../Library/box.js";
import HitboxComponent from "../../Components/HitboxComponent.js";

export default class GameObject {
  _infoButton = null;
  _shape = null;
  _hitboxComponent = null;
  constructor(width, height, x, y, texturePath) {
    this._shape = new Box(width, height, x, y);
    this._shape.setBoxTexture(texturePath);
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
  // update(dt){};
  createInteractionButton(
    width,
    height,
    x,
    y,
    text,
    fontSize,
    fontFamily,
    color = "black",
  ) {
    this._infoButton = new InteractionButton(
      width,
      height,
      x,
      y,
      text,
      fontSize,
      fontFamily,
      color,
    );
  }
  update(hitbox) {
    if (this._infoButton) {
      this._infoButton.update();
    }
    if (this._hitboxComponent) {
      this._hitboxComponent.contains(hitbox.getHitbox());
    } 
  }
  render() {
    if (this._hitboxComponent) {
      this._hitboxComponent.render();
    }
    if (this._infoButton) {
      this._infoButton.render(this._infoButtonBool);
    }
    this._shape.draw();
  }
}
