const start = document.querySelector(".btn-start");
let lesson = localStorage.getItem("lesson") || 0;
console.log(lesson);

start.addEventListener("click", function () {
    if (lesson < 4) window.open("learn.html", "_self");
    else {
        const template = `<div class="error show">
        <div class="error-content">
            <i class="fa-solid fa-xmark"></i>
            <h2 class="error-content__heading">Bài Học Đang Cập Nhật</h2>
            <p class="error-content__desc">
                Bài học sẽ cập nhật sớm nhất. Hãy quay lại sau
            </p>
        </div>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", template);
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

error.addEventListener("click", function (e) {
    if (e.target.matches(".error")) {
        error.classList.remove("show");
    }
});

error.querySelector("i").addEventListener("click", function (e) {
    error.classList.remove("show");
});
