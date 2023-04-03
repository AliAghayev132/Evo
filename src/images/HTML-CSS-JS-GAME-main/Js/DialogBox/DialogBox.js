export default class DialogBox {
  #box;
  #texts = [];
  initBox() {
    this.#box = document.createElement("pre");
    this.#box.style.display = "none";
    this.#box.style.position = "absolute";
    this.#box.style.color = "black";
    this.#box.style.backgroundColor =
      "rgba" + "(" + 56 + "," + 39 + "," + 48 + "," + 80 + ")";
    document.body.appendChild(this.#box);
  }
  constructor() {
    this.initBox();
  }
  openDialog() {
    this.#box.style.display = "block";
  }
  closeDialog() {
    this.#box.style.display = "none";
  }
  createNewText(text) {
    this.#texts.push(text);
  }
  nextText() {
    return this.#texts.shift();
  }
  setColor(color) {
    this.#box.style.color = color;
  }
  setBackgroundColor(color) {
    this.#box.style.backgroundColor = color;
  }
  clear() {
    this.#box.innerText = "";
    this.#box.style.display = "none";
  }
  updateKey(key) {
    if (key == "enter") {
      if (this.#texts.length) {
        this.#box.innerText = this.nextText();
      } else {
        this.clear();
      }
    }
  }
  update(key) {
    this.updateKey(key);
  }

  render() {}
}
