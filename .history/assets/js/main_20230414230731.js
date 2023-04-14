const start = document.querySelector(".btn-start");
let lesson = localStorage.getItem("lesson") || 0;
console.log(lesson);

start.addEventListener("click", function () {
    if (lesson < 4) window.open("learn.html", "_self");
    return;
});

const template = `<div class="error show">
<div class="error-content">
    <i class="fa-solid fa-xmark"></i>
    <h2 class="error-content__heading">Dành Cho Tài Khoản VIP</h2>
    <p class="error-content__desc">
        Theo yêu cầu của đơn vị sở hữu bản quyền, bạn cần tài khoản
        VIP để nghe bài hát này.
    </p>
</div>
</div>`;

document.body.insertAdjacentHTML("beforeend", template);
