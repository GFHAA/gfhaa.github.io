// let img = document.querySelector("#imgContainer");
// let original = document.getElementById("original");
// let pImg;
// function show(e) {

// }
// document.onclick = function (e) {
//     // console.log(e.target)
//     if (e.target.className != "original" && e.target.className != "arrow right" && e.target.className != "arrow left" && document.querySelector(".original").getAttribute("class").indexOf("d-flex") == 9 && e.target.className != "img-div-page" && e.target.className != "originalImage") {
//         document.querySelector(".original").classList.add("hide");
//         document.querySelector(".original").classList.remove("d-flex");
//     }
//     else if (e.target.className == "imgShow") {
//         if (document.querySelector(".pImg")) { document.querySelector(".pImg").remove(); }

//         pImg = document.createElement('p')
//         pImg.classList.add("pImg")
//         pImg.innerHTML = '<img class="originalImage" src="imgs/' + e.target.id + '.jpg"></img>';
//         img.appendChild(pImg);
//         original.classList.add("d-flex");
//         document.querySelector(".original").classList.remove("hide");
//         document.querySelector(".original").classList.add("d-flex");
//     }
// };
// function closeContainer() {
//     document.querySelector(".original").classList.add("hide");
//     document.querySelector(".original").classList.remove("d-flex");
// }