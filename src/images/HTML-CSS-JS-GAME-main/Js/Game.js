import Player from "./Entities/Player.js";
import OutsideHouse from "./Scenes/OutsideHouse.js";
import Box from "./Library/box.js";

export default class Game {
    //Constructor

    constructor() {
        this.gameScenes = [];
        this.gameScenes.push(new OutsideHouse());
        this.player = new Player(120, 80, 0, 276);
        this.player.setTexture("/HTML-CSS-JS-GAME/Resources/test.png");
    }

    //Update Functions

    updatePlayerInput() {
        document.onkeydown = (e) => {
            let key = e.key.toLocaleLowerCase();
            if (key == "d") this.player.move(1, 0);
            if (key == "a") this.player.move(-1, 0);
        };
    }

    update(dt) {
        this.updatePlayerInput();
        this.player.update(dt);
        this.gameScenes[this.gameScenes.length - 1].update(this.player);
    }

    //Render

    render() {
        this.gameScenes[this.gameScenes.length - 1].render();
        this.player.render();
    }

    //Run

    run(dt) {
        this.update(dt);
        this.render();
    }
}