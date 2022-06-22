let img = document.querySelector("#imgContainer");
let original = document.getElementById("original");
function show(e){
    let pImg = document.createElement('p')
    pImg.innerHTML = '<img class="originalImage" src="imgs/' + e +  '.jpg"></img>';
    img.appendChild(pImg);
    original.classList.add("d-flex");
}