 import Box from "../Library/box.js";

export default class InteractionButton {
  _box;
  #renderBool = false;
  constructor(
    width,
    height,
    x,
    y,
    text,
    fontSize,
    fontFamily,
    color = "black",
  ) {
    this._box = new Box(width, height, x, y);
    this._box.setText(text);
    this._box.setFontSize(fontSize);
    this._box.setFontSize(fontFamily);
    this._box.setColor(color);
    this._box.setBackgroundColor("white");
  }
  setRenderBool(par){
    this.#renderBool = par;
  }
  update() {
    
  }
  render() {
    if(this.#renderBool){
      this._box.draw();
    }else{
      this._box.clear();
    }
  }
}
