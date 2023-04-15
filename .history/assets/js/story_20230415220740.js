const stories = [doctor, coat, passport];
const index = Math.floor(Math.random() * 3);

const data = stories[index];
const dataLength = data.elements.length;
console.log("index:" + index);
console.log(stories[index]);

const heading = document.querySelector(".story-content__heading");
const content = document.querySelector(".story-content");
const grid = document.querySelector(".story-content-grid");
const storyBtn = document.querySelector(".story-content .btn");
const closeBtn = document.querySelector(".story-progress__bar>i");
const progress = document.querySelector(".story-progress__bar");
const audio = new Audio();

let id = -1;
closeBtn.addEventListener("click", function (e) {
    window.open("home.html", "_self");
    return;
});

//! here
storyBtn.addEventListener("click", function (e) {
    if (storyBtn.classList.contains("btn--primary")) {
        storyBtn.textContent = "Tiếp theo";

        for (let i = dataLength - 1; i >= 0; i--) {
            console.log(data + "hehehehe");
            // const element = array[i];
        }

        loadStory();

        // window.pageYOffset = window.offsetHeight - window.clientHeight;
        console.log("viewport: " + window.innerHeight);
        console.log(document.body.offsetHeight);
        console.log(document.body.offsetHeight - window.innerHeight);
        console.log("pageY: " + window.pageYOffset);
        if (document.body.offsetHeight > window.innerHeight) {
            console.log("work");
            window.scrollTo(0, document.body.offsetHeight - window.innerHeight);
        }
    }
});
//! here
document.body.addEventListener("click", function (e) {
    if (e.target.closest(".story-content-item")) {
        const items = document.querySelectorAll(".story-content-item");
        items.forEach((item) => {
            item.classList.remove("story-content-item--selected");
        });

        e.target
            .closest(".story-content-item")
            .classList.add("story-content-item--selected");

        storyBtn.classList.add("btn--primary");
    }
});

window.addEventListener("load", function () {
    audio.src = data.elements[0].learningLanguageTitleContent.audio.url;
    audio.play();
});

loadStart();

function loadStart() {
    id++;
    heading.textContent = data.fromLanguageName;
    storyBtn.textContent = "Bắt đầu";
    content.insertAdjacentHTML(
        "afterbegin",
        `<img
    class="story-content__thumb"
    src="${data.illustrations.active}"
    alt=""
/>`
    );
    storyBtn.classList.add("btn--primary");
}
function loadStory() {
    id++;

    if (!data.elements[id].line) {
        loadStory();
        return;
    }

    const percent = (id / dataLength) * 100;
    const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
    progress.style.background = color;

    console.log("ID: " + id);

    const content = data.elements[id].line.content;
    console.log(data.elements[id]);

    const template = `<div class="story-content-item" data-voice=${
        content.audio.url
    }>
        
        ${
            data.elements[id].line.avatarUrl
                ? `<div class="story-content-item__img">
        <img
            src="${data.elements[id].line.avatarUrl}"
            alt="story"
        />
    </div>`
                : ""
        }

        <div class="story-content-item-info">
            <i data-voice=${content.audio.url}
                class="fa-solid fa-volume-high story-content-item-info__speaker"
                style="color: #1cb0f6"
            ></i>
            <div class="story-content-item-info__heading">
                ${content.text}
            </div>
            </div>
        </div>`;

    audio.src = content.audio.url;
    audio.play();

    grid.insertAdjacentHTML("beforeend", template);

    document
        .querySelector(".story-content-item-info__speaker")
        .addEventListener("click", function (e) {
            audio.src = e.target.dataset.voice;
            audio.play();
        });
    console.log("add");
}
