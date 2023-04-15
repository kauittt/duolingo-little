const start = document.querySelector(".btn-start");
let lesson = localStorage.getItem("lesson") || 1;
const error = document.querySelector(".error");
console.log(lesson);

start.addEventListener("click", function () {
    if (lesson <= 4) window.open("learn.html", "_self");
    else {
        error.classList.add("show");
    }
    return;
});

document.addEventListener("click", function (e) {
    if (e.target.matches(".error")) {
        error.classList.remove("show");
    } else if (e.target.matches(".error i")) {
        error.classList.remove("show");
    }
});
