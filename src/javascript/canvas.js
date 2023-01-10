// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'black';
// ctx.fillRect(0, 0, 100, 100);
// canvas.width = window.innerWidth + 100;
// canvas.height = 300;

// class Grid {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//     }
//     draw() {
//         ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
//         ctx.strokeRect(this.x, this.y, 50, 50);
//     }
// }
// class GridMap {
//     constructor(size) {
//         this.size = size;
//         this.grids = [];
//         let x = canvas.width / this.size;
//         let y = canvas.height / this.size;
//         for (let i = 0; i < Math.ceil(x); ++i) {
//             for (let j = 0; j < Math.ceil(y); ++j) {
//                 this.grids.push(new Grid(i * 50, j * 50, ""));
//             }
//         }
//         console.log(x, y);
//     }
//     update() {
//         for (let i in this.grids)
//             this.grids[i].draw();
//     }
// }

// const gridMap = new GridMap(50);

// class Snake {
//     constructor(x, y, color) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.size = 1;
//         this.piece = [{ x: this.x, y: this.y }];
//         this.sizeX = Math.ceil(canvas.width / 50);
//         this.sizeY = Math.ceil(canvas.height / 50);
//     }
//     move(x, y) {
//         let temp = { x, y };
//         console.log(this.sizeX,this.sizeY);
//         for (let i = 0; i < this.piece.length; ++i) {
//             if (x > this.sizeX)
//                 x = 0;
//             if (y > this.sizeY)
//                 y = 0;
//             console.log(x,y);

//             let posx = this.piece[i].x, posy = this.piece[i].y;
//             this.piece[i].x = temp.x;
//             this.piece[i].y = temp.y;
//             temp.x = posx;
//             temp.y = posy;
//         }
//     }
//     update() {

//     }
//     sizeUp() {
//         this.piece.push({ x: 0, y: 0 });
//     }
//     draw() {
//         console.log(this.piece);
//         for (let i = 0; i < this.piece.length; ++i) {
//             ctx.fillStyle = 'red';
//             ctx.fillRect(this.piece[i].x * 50, this.piece[i].y * 50, 50, 50);
//         }
//     }
// }
// const snake = new Snake(0, 0, 'red');
// snake.update();
// let i = 0;
// function animate() {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     gridMap.update();
//     snake.move(i++, 0);
//     snake.draw();
//     // requestAnimationFrame();
// }
// animate();
// setInterval(() => {
//     animate();
// }, 100);