const stories = [doctor, coat, passport];

const index = Math.floor(Math.random() * 3);
console.log(index);
console.log(stories);

const heading = document.querySelector(".story-content__heading");
const grid = document.querySelector(".story-content-grid");
const storyBtn = document.querySelector(".story-content .btn");
const closeBtn = document.querySelector(".story-progress__bar>i");
const progress = document.querySelector(".story-progress__bar");

closeBtn.addEventListener("click", function (e) {
    window.open("home.html", "_self");
    return;
});

//! here
learnBtn.addEventListener("click", function (e) {
    if (learnBtn.classList.contains("btn--primary")) {
        learnBtn.classList.remove("btn--primary");
    }
});

//! here
document.body.addEventListener("click", function (e) {
    if (e.target.closest(".survey-content-item")) {
        const items = document.querySelectorAll(".survey-content-item");
        items.forEach((item) => {
            item.classList.remove("survey-content-item--selected");
        });

        e.target
            .closest(".survey-content-item")
            .classList.add("survey-content-item--selected");

        learnBtn.classList.add("btn--primary");
    }
});

function loadStart() {}
function loadStory() {
    id++;

    console.log(id);
    if (!id) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }

    const percent = (id / 4) * 100;
    const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
    progress.style.background = color;

    grid.style.display = "grid";
    grid.classList.remove("survey-content-flex");
    learnBtn.style.display = "block";

    const item = data.items[id];
    console.log(item.heading);
    heading.textContent = item.heading;

    for (let i = 0; i < Object.keys(item.choices).length; i++) {
        const choice = item.choices[i];

        const template = `<div class="survey-content-item">

        ${
            choice.url
                ? `<div class="survey-content-item__img">
                        <img
                            src="${choice.url}"
                            alt="survey"
                        />
                  </div>`
                : ""
        }
        

        <div class="survey-content-item-info">
            <div class="survey-content-item-info__heading">
                ${choice.heading}
            </div>

            ${
                "desc" in choice
                    ? `<div
            class="survey-content-item-info__desc"
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
