import Game from "./Game.js";

const game = new Game();
//Game core

let lastTick = performance.now();

function tick(nowish) {
  const delta = nowish - lastTick;
  lastTick = nowish;

  game.run(delta);
  window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);
