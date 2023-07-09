const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circle;

const colors = ["#D9D9D9", "#CBCBCB", "#AFAFAF", "#949494", "#797979", "#606060", "#484848", "#313131"];

function generateRandom(min, max) {
    // find diff
    let difference = max - min;
    // generate random number 
    let rand = Math.random();
    // multiply with difference 
    rand = Math.floor( rand * difference);
    // add with min value 
    rand = rand + min;
    return rand;
}

class Circle {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.fill();
    }
}

function render(numberOfObjects) {
    let n = 8;
    for (let i = 0; i < numberOfObjects; i++) {
        circle = new Circle(0, 0, n * 100, colors[i]);
        circle.draw();
        n--;
        console.log(n);
        console.log(circle);
    }
    n = 8;
    for (let i = 0; i < numberOfObjects; i++) {
        circle = new Circle(canvas.width, canvas.height, n * 100, colors[i]);
        circle.draw();
        n--;
        console.log(n);
        console.log(circle);
    }

}

render(8);

