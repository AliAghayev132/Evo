import Map from "../Map/map.js";
import Tile from "../Map/objects/tile.js";
import House from "../Map/objects/house.js";
import Box from "../Library/box.js";

export default class OutsideHouse {
  #map = null;
  #worldBorders = null;
  initBorder(){
    this.#worldBorders = {
      left: new Box(20,1080,0,0),
      right: new Box(20,1080,740,0)
    }
    this.#worldBorders.left.setBackgroundColor("red");
    this.#worldBorders.right.setBackgroundColor("red");
  } 
  initMap() {
    this.initBorder();
    this.#map = new Map();
    this.#map.addItem(
      new Tile(258, 52, 0, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#map.addItem(
      new Tile(258, 52, 253, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#map.addItem(
      new Tile(258, 52, 503, 336, "/HTML-CSS-JS-GAME/Resources/grass.png"),
    );
    this.#map.addItem(
      new House(170, 170, 20, 183, "/HTML-CSS-JS-GAME/Resources/house.png"),
    );
    this.#map.getItem().createHitboxComponent(32,37,70,313,0,0,"Brown");
    this.#map.getItem().createInteractionButton(15,15,79,293,"E",14,"Arial","Red");
  }
  constructor() {
    this.initMap();
  }
  update(player) {
    this.#map.update(player);
  }
  renderBorders(){
    this.#worldBorders.right.draw();
    this.#worldBorders.left.draw();
  }
  render() {
    this.renderBorders();
    this.#map.render();
  }
}
