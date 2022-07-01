const range = document.querySelector("#speedFall");
const rangeInt = document.querySelector("#speedFallInt");

const rangeX = document.querySelector("#speedFallX");
const rangeIntX = document.querySelector("#speedFallIntX");

range.addEventListener("input", function(){
    snows.speedFall = Number(this.value);
    rangeInt.value = Number(this.value);
})

rangeInt.addEventListener("input", function(){
    snows.speedFall = Number(this.value);
    range.value = Number(this.value);;
})

rangeX.addEventListener("input", function(){
    snows.speedX = Number(this.value);
    rangeIntX.value = Number(this.value);
})

rangeIntX.addEventListener("input", function(){
    snows.speedX = Number(this.value);
    rangeX.value = Number(this.value);;
})