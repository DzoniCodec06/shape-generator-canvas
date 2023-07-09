const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let randomX;
let randomY;
let randomR;

let mouse = {
    x: 100,
    y: 100
}

let circle;

let xDistance;
let yDistance;

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
/*
let circle1 = new Circle(canvas.width / 2, canvas.height / 2, 150, "white");
let circle2 = new Circle(100, 100, 20, "red");*/
/*
window.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});*/

function getDistance(x1, y1, x2, y2) {
    xDistance = x2 - x1;
    yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
/*
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circle1.draw();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.draw();

    if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.r + circle2.r) {
        circle1.color = "red";
        circle2.color = "white";
    } else {
        circle1.color = "white";
        circle2.color = "red";
    }
}*/

//animate();

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

for (let i = 0; i < 10; i++) {
    randomR = Math.floor((Math.random() * 100) + 40); 
    randomX = generateRandom(randomR, canvas.width - randomR);
    randomY = generateRandom(randomR, canvas.height - randomR);

    circle = new Circle(randomX, randomY, randomR, "red");

    circle.draw();
    
} 



