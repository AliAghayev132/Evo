{
    const canvas = document.querySelector('.batmancanvas'),
        ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 110;
    const img = new Image(); // Create new img element
    const imgflip = new Image(); // Create new img element
    img.src = './src/images/batman.png'; // Set source path
    imgflip.src = './src/images/batmanflip.png'; // Set source path
    class Batman {
        constructor() {
            this.pos = { x: 0, y: 0 };
            this.rows = 1;
            this.cols = 6;
            this.curFrame = 0;
            this.frameCount = 6;
            this.spriteWidth = 672;
            this.spriteHeight = 150;
            this.width = this.spriteWidth / this.cols;
            this.height = this.spriteHeight / this.rows;
            this.srcX = 0;
            this.srcY = 0;
            this.vecX = 10;
            this.drawedImage = img;
            this.batmanfly = false;
        }
        update() {
            if (!this.batmanfly) {
                if (this.pos.x >= canvas.width - this.width) {
                    this.vecX = -10;
                }
                else if (this.pos.x <= 0) {
                    this.vecX = 10;
                }
            } else {

            }
            this.updateAnimation();
            this.updateMove();
        }

        updateAnimation() {
            if (this.vecX == 10)
                this.drawedImage = img;
            else
                this.drawedImage = imgflip;
        }
        updateMove() {
            this.pos.x += this.vecX;
            this.curFrame = ++this.curFrame % this.frameCount;
            this.srcX = this.curFrame * this.width;
        }
        draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.drawedImage, this.srcX, this.srcY, this.width, this.height, this.pos.x, this.pos.y, this.width, this.height);
            // console.log(this.batmanfly);
        }
    }
    const batman = new Batman;

    img.onload = () => {
        setInterval(() => {
            batman.update();
            batman.draw();
        }, 100);
    }

}


