export default class Box {
  #box = document.createElement("div");
  #texture = document.createElement("div");
  #width;
  #height;
  #color;
  #flip;
  constructor(width, height, x, y) {
    this.#width = width;
    this.#height = height;
    this.#color = "none";
    this.#box.style.position = "absolute";
    this.#box.style.left = x + "px";
    this.#box.style.top = y + "px";
    this.#box.style.width = width + "px";
    this.#box.style.height = height + "px";
    this.#box.style.backgroundColor = this.#color;
    this.#box.style.display = "none";
    this.#box.style.overflow = "hidden";
    this.#box.style.textAlign = "center";
    this.#flip = 1;

    this.#texture.style.width = width + "px";
    this.#texture.style.height = height + "px";
    this.#texture.style.display = "none";
    this.#texture.style.overflow = "hidden";
    this.#texture.style.left = x + "px";
    this.#texture.style.top = y + "px";

    this.#box.appendChild(this.#texture);
    document.body.appendChild(this.#box);
  }

  //Accessors
  getPositions() {
    return { x: this.#box.style.left, y: this.#box.style.top };
  }
  getPositionX() {
    return parseFloat(this.#box.style.left);
  }
  getPositionY() {
    return parseFloat(this.#box.style.top);
  }
  getSize() {
    return { width: this.#width, height: this.#height };
  }
  getFlip() {
    return this.#flip;
  }
  //Modifiers
  setFontSize(par) {
    this.#box.style.fontSize = par + "px";
  }
  setFontFamily(par) {
    this.#box.style.fontFamily = par;
  }
  setColor(color) {
    this.#box.style.color = color;
  }
  setBackgroundColor(color) {
    this.#box.style.backgroundColor = color;
  }
  setPositions(x, y) {
    this.#box.style.left = x + "px";
    this.#box.style.top = y + "px";
  }
  setSize(width, height) {
    this.#width = width;
    this.#height = height;
  }
  setBoxTexture(path) {
    this.#box.style.backgroundImage = "url(" + path + ")";
  }
  setTexture(path) {
    this.#texture.style.backgroundImage = "url(" + path + ")";
  }
  setOrigin(x = 0, y = 0) {
    this.#texture.style.marginLeft = x + "px";
    this.#texture.style.marginTop = y + "px";
  }
  setText(text) {
    this.#box.innerText = text;
  }
  setBorder(color, thickness) {
    this.#box.style.borderColor = color;
    this.#box.style.borderWidth = thickness + "px";
    this.#box.style.borderStyle = "solid";
  }
  setRect(obj) {
    this.#texture.style.backgroundPosition = `${obj.left}px ${obj.top}px`;
  }

  //Custom
  flipTexture(par = 1) {
    this.#texture.style.transform = `scaleX(${par})`;
    this.#flip = par;
  }

  draw() {
    this.#box.style.display = "block";
    this.#texture.style.display = "block";
  }
  clear() {
    this.#box.style.display = "none";
    this.#texture.style.display = "none";
  }
  moveObject(x, y) {
    this.#box.style.left = parseFloat(this.#box.style.left) + x + "px";
    this.#box.style.top += parseFloat(this.#box.style.top) + y + "px";
  }
}
