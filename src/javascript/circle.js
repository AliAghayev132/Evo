import { $, random } from "./custom.js";

export default function createCircleSystem() {
    function initCircles() {
        circles = [];
        while (circlesSizes--)
            circles.push(new Circle(random(0, canvas.width), random(0, canvas.height), random(1, 4), colors[random(0, 5)]));
    }
    function drawCircle(par) {
        ctx.beginPath();
        ctx.arc(par.x, par.y, par.r, 0, Math.PI * 2);
        ctx.fillStyle = par.c;
        ctx.fill();
        ctx.stroke();
        ctx.strokeStyle = 'transparent';
    };
    function checkSizes() {
        if (window.innerWidth > 1000)
            circlesSizes = 100;
        else if (window.innerWidth > 800)
            circlesSizes = 80;
        else if (window.innerWidth > 600)
            circlesSizes = 60;
        else if (window.innerWidth > 400)
            circlesSizes = 40;
        else
            circlesSizes = 20;
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i of circles) {
            i.update(circles);
            i.render();
        }
        requestAnimationFrame(animate);
    }
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        checkSizes();
        initCircles();
    })

    let circlesSizes = 100, circles = [];
    const colors = ["#3E57E8", "#F72585", "#4CC9F0", "#4361EE", "#7209B7"],
        canvas = $('.circlecanvas'),
        ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    class Circle {
        constructor(x, y, r = 5, c = 'black') {
            this.x = x;
            this.y = y;
            this.r = r;
            this.c = c;
            this.v = {
                x: random(1, 2) * (random(0, 2) === 1 ? 1 : -1),
                y: random(1, 2) * (random(0, 2) === 1 ? 1 : -1)
            };
        }
        update(circles) { // x -> dir_x, y -> dir_y
            (this.x + this.v.x > canvas.width - this.r * 2 || this.x < 0) && (this.v.x *= -1);
            (this.y + this.v.y > canvas.height - this.r * 2 || this.y < 0) && (this.v.y *= -1)

            this.x += this.v.x;
            this.y += this.v.y;

            for (let i of circles)
                (Math.sqrt((i.x - this.x) * (i.x - this.x) + (i.y - this.y) * (i.y - this.y)) < 100) && (
                    ctx.beginPath(),
                    ctx.strokeStyle = 'black',
                    ctx.lineWidth = 0.05,
                    ctx.moveTo(this.x, this.y),
                    ctx.lineTo(i.x, i.y),
                    ctx.stroke()
                )
        }
        render() {
            drawCircle({ x: this.x, y: this.y, r: this.r, c: this.c });
        }
    }
    
    checkSizes();
    initCircles();
    animate();
}
