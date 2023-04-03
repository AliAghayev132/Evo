export default class Map {
  #objects;
  initVariables() {
    this.#objects = [];
  }
  constructor() {
    this.initVariables();
  }
  addItem(item) {
    this.#objects.push(item);
  }
  loadFromSave(path) {}
  getItem(par = this.#objects.length - 1) {
    return this.#objects[par];
  }
  update(player) {
    for (let i in this.#objects) {
      this.#objects[i].update(player);
    }
  }
  render() {
    for (let i in this.#objects) {
      this.#objects[i].render();
    }
  }
}
