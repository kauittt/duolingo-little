const start = document.querySelector(".btn-start");
let lesson = localStorage.getItem("lesson") || 0;
console.log(lesson);

start.addEventListener("click", function () {
    if (lesson < 4) window.open("learn.html", "_self");
    return;
});
