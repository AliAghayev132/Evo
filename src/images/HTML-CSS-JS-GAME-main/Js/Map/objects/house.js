import GameObject from "./gameobject.js";

export default class House extends GameObject {
  constructor(width, height, x, y, path) {
    super(width, height, x, y, path);
  }
  update(player) {
    super.update(player);
    this._infoButton.setRenderBool(this._hitboxComponent.getContains());
  }
  render() {
    super.render();
  }
}
