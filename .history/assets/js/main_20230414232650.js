const start = document.querySelector(".btn-start");
let lesson = localStorage.getItem("lesson") || 0;
const error = document.querySelector(".error");
console.log(lesson);

start.addEventListener("click", function () {
    if (lesson < 4) window.open("learn.html", "_self");
    else {
    }
    return;
});

document.addEventListener("click", function (e) {
    if (e.target.matches(".error")) {
        console.log("error");
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".error i")) {
        console.log("X");
        e.target.parentNode.parentNode.classList.remove("show");
    }
});
