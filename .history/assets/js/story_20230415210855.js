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

        storyBtn.classList.remove("btn--primary");
        loadStory();
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

    const percent = (id / dataLength) * 100;
    const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
    progress.style.background = color;

    const item = data.items[id];
    console.log(item.heading);
    heading.textContent = item.heading;

    for (let i = 0; i < Object.keys(item.choices).length; i++) {
        const choice = item.choices[i];

        const template = `<div class="story-content-item">

        ${
            choice.url
                ? `<div class="story-content-item__img">
                        <img
                            src="${choice.url}"
                            alt="story"
                        />
                  </div>`
                : ""
        }
        

        <div class="story-content-item-info">
            <div class="story-content-item-info__heading">
                ${choice.heading}
            </div>

            ${
                "desc" in choice
                    ? `<div
            class="story-content-item-info__desc"
        >
            ${choice.desc}
        </div>`
                    : ""
            }
            
        </div>
    </div>`;

        grid.insertAdjacentHTML("beforeend", template);
    }
}
