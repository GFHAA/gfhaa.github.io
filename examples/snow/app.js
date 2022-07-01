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
    snowCount: getRandomInt(50, 150),
    snowsPositions: [],
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
    fallSnow(){
        for(let i = 0; i < snows.snowCount; i++){
            snows.snowsPositions[i].y += getRandomInt(1,2);
            // snows.snowsPositions[i].x += getRandomInt(-1,2);
            if(snows.snowsPositions[i].y > height+snows.snowsPositions[i].r + 5){
                snows.snowsPositions[i].y = 0
            }
        }
        snows.drawSnow()
    }
}
snows.createSnows()
snows.drawSnow()
setInterval(snows.fallSnow, 50)