const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

console.log()
canvas.width = width;
canvas.height = height;


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let snows = {
    frames: 3,
    speedFall: 2,
    snowCount: getRandomInt(50, 150),
    snowsPositions: [],
    speedX: 0,
    createSnows() {
        for (let i = 0; i < this.snowCount; i++) {
            snows.snowsPositions.push({
                x: getRandomInt(0, width),
                y: getRandomInt(0, height),
                r: getRandomInt(1, 20)
            })
        }
    },
    drawSnow() {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        for (let i = 0; i < snows.snowCount; i++) {
            let cur = snows.snowsPositions[i];
            ctx.moveTo(cur.x, cur.y);
            ctx.arc(cur.x, cur.y, cur.r, 0, 2 * Math.PI);
        }
        ctx.fill();
        ctx.closePath();

    },
    fallSnow() {
        for (let i = 0; i < snows.snowCount; i++) {
            snows.snowsPositions[i].y += snows.speedFall;
            snows.snowsPositions[i].x += snows.speedX;
            if (snows.snowsPositions[i].y > height + snows.snowsPositions[i].r * 2 + 1) {
                snows.snowsPositions[i].y = 0 - snows.snowsPositions[i].r;
            }
            if (snows.snowsPositions[i].x > width + snows.snowsPositions[i].r * 2 + 1) {
                snows.snowsPositions[i].x = 0 - snows.snowsPositions[i].r;
            }
            if (snows.snowsPositions[i].x < 0-snows.snowsPositions[i].r ) {
                snows.snowsPositions[i].x = width - snows.snowsPositions[i].r;
            }
        }
        snows.drawSnow()
    }
}
snows.createSnows()
snows.drawSnow()
setInterval(snows.fallSnow, snows.frames * 10)