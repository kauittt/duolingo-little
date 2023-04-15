async function getData(index) {
    const res = await fetch(`/assets/data/session1-${lesson}.json`);
    console.log(`/assets/data/session1-${lesson}.json`);
    let data = await res.json();
    console.log(data);
    // data = data[index];

    const adap = data.adaptiveChallenges || [];
    const challenges = data.challenges;
    console.log([...adap, ...challenges]);
    lessonLength = [...adap, ...challenges].length;
    console.log("lesson length: " + lessonLength);
    if (lessonLength == 4) {
        window.open("home.html", "_self");
    }
    return [...adap, ...challenges];
    //! combined
}
// 4,5
let lesson = localStorage.getItem("lesson") || 1;
let lessonLength = null;
console.log("lesson: " + lesson);

const heading = document.querySelector(".learn-content__heading");
const learnContent = document.querySelector(".learn-content");
const grid = document.querySelector(".learn-content-grid");
const learnBtn = document.querySelector(".learn-content .btn");
const closeBtn = document.querySelector(".learn-progress__bar>i");
const progress = document.querySelector(".learn-progress__bar");
const input = document.querySelector(".learn-content__input");
const audio = new Audio();

let id = -2;
let key = [];
let answer = [];
let inputValue = [];
closeBtn.addEventListener("click", function (e) {
    console.log("back");
    if (id == -1) {
        window.open("home.html", "_self");
        return;
    }

    id--;
    if (id == -1) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }
    grid.innerHTML = "";
    input.value = "";
    answer = [];
    inputValue = [];
    key = [];
    learnBtn.classList.remove("btn--primary");

    const next =
        learnContent.querySelector(".learn-content__character") ||
        learnContent.querySelector(".learn-content__speaker");

    console.log(next);
    if (next) next.parentNode.removeChild(next);

    loadLearn(id);
});
learnBtn.addEventListener("click", function (e) {
    if (learnBtn.classList.contains("btn--primary")) {
        if (id == lessonLength) {
            window.open("home.html", "_self");
            return;
        }

        console.log(key);
        console.log(answer);
        if (JSON.stringify(answer) == JSON.stringify(key)) {
            console.log("true");
            learnBtn.classList.remove("btn--primary");
            grid.innerHTML = "";
            input.value = "";
            answer = [];
            inputValue = [];
            key = [];

            const next =
                learnContent.querySelector(".learn-content__character") ||
                learnContent.querySelector(".learn-content__speaker");
            if (next) next.parentNode.removeChild(next);
            //!!!!!
            loadLearn(++id);
        } else {
            console.log("false");
            learnBtn.classList.add("btn--error");
        }
    }
});
document.body.addEventListener("click", function (e) {
    if (e.target.closest(".learn-content-item--listen")) {
        learnBtn.classList.remove("btn--error");

        const item = e.target.closest(".learn-content-item--listen");
        if (item.dataset.voice) loadSound(item.dataset.voice);

        if (item.classList.contains("learn-content-item--selected")) {
            item.classList.remove("learn-content-item--selected");
            const index = answer.indexOf(+item.dataset.id);
            answer.splice(index, 1);
            inputValue.splice(index, 1);
        } else {
            item.classList.add("learn-content-item--selected");
            answer.push(+item.dataset.id);
            inputValue.push(
                item
                    .querySelector(".learn-content-item-info__heading")
                    .textContent.trim()
            );
        }

        const items = document.querySelectorAll(".learn-content-item");
        learnBtn.classList.remove("btn--primary");

        items.forEach((item) => {
            if (item.classList.contains("learn-content-item--selected")) {
                learnBtn.classList.add("btn--primary");
            }
        });

        input.value = "";
        inputValue.forEach((item) => {
            input.value += item + " ";
        });
    } else if (e.target.closest(".learn-content-item")) {
        learnBtn.classList.remove("btn--error");

        const item = e.target.closest(".learn-content-item");
        const items = document.querySelectorAll(".learn-content-item");
        items.forEach((item) => {
            item.classList.remove("learn-content-item--selected");
        });

        if (item.dataset.voice) loadSound(item.dataset.voice);

        answer = [];
        answer.push(+item.dataset.id);
        item.classList.add("learn-content-item--selected");

        learnBtn.classList.add("btn--primary");
    }
});

loadLearn(++id);

async function loadLearn(index, thumb = true) {
    console.log("IDDDDD: " + id);
    //! index

    const data = await getData(lesson);
    const item = data[index];
    if (id > lessonLength) return;
    console.log(item);

    if (id == lessonLength) {
        loadFinish();
        return;
    }
    if (id == -1) {
        loadStart();
        return;
    }
    //!index
    switch (item.type) {
        case "select":
            key.push(loadSelect(item, data.length));
            //!index
            break;

        case "translate":
            key = loadTrans(item, data.length, item.character);
            break;
        case "listenTap":
            key = loadListen(item, data.length, item.character);
            break;
        default:
            loadLearn(++id);
            return;
    }
}

function loadSelect(data, len, thumb = true) {
    if (id == -1) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }

    const percent = ((id - 1) / len) * 100;
    const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
    progress.style.background = color;

    const itemsLength = data.choices.length;
    input.style.display = "none";
    grid.style.gridTemplateColumns = `repeat(${itemsLength}, 1fr)`;

    heading.textContent = `Đâu là "${data.prompt}"`;

    const hashtable = {};
    for (let i = 0; i < data.choices.length; i++) {
        hashtable[data.choices[i].phrase] = i;
    }
    data.choices.sort(() => 0.5 - Math.random());

    for (let i = 0; i < data.choices.length; i++) {
        const choice = data.choices[i];

        const template = `<div data-voice="${choice.tts}" data-id="${
            hashtable[choice.phrase]
        }" class="learn-content-item  ${
            data.correctIndex == i ? "learn-content-item--correct" : ""
        }">

        ${
            choice.svg
                ? `<div class="learn-content-item__img">
                        <img
                            src="${choice.svg}"
                            alt="learn"
                        />
                  </div>`
                : ""
        }

        <div class="learn-content-item-info">
            <div class="learn-content-item-info__heading">
                ${choice.phrase}
            </div>
        </div>
    </div>`;

        grid.insertAdjacentHTML("beforeend", template);
    }

    console.log("KEY: " + data.correctIndex);
    return data.correctIndex;
}

function loadTrans(data, len, thumb = true) {
    if (id == -1) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }

    const percent = (id / len) * 100;
    const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
    progress.style.background = color;

    const itemsLength = data.choices.length;
    input.style.display = "block";
    grid.style.gridTemplateColumns = `repeat(${itemsLength}, 1fr)`;

    heading.textContent = `Viết lại bằng "${
        data.targetLanguage == "en" ? "Tiếng Anh" : "Tiếng Việt"
    }"`;

    heading.insertAdjacentHTML(
        "afterend",
        `<div class="learn-content__character" data-delete="true">
        <img
            src=${data.character.image.svg}
            alt=""
        />

        <p class="learn-content__character__message">
        <i class="fa-solid fa-volume-high learn-content__character__message__speaker" style="color: #1cb0f6;"></i>
            ${data.prompt}
        </p>
    </div>`
    );
    const p = document.querySelector(".learn-content__character__message");
    document
        .querySelector(".learn-content__character__message__speaker")
        .addEventListener("click", () => {
            loadSound(data.tts);
        });
    p.style.right = `-${p.offsetWidth + 5}px`;

    const hashtable = {};
    for (let i = 0; i < data.choices.length; i++) {
        hashtable[data.choices[i].text] = i;
    }

    data.choices.sort(() => 0.5 - Math.random());

    for (let i = 0; i < data.choices.length; i++) {
        const choice = data.choices[i];

        const template = `<div  data-id="${
            hashtable[choice.text]
        }" class="learn-content-item learn-content-item--listen">
        ${
            choice.svg
                ? `<div class="learn-content-item__img">
                        <img
                            src="${choice.svg}"
                            alt="learn"
                        />
                  </div>`
                : ""
        }
        <div class="learn-content-item-info">
            <div class="learn-content-item-info__heading">
                ${choice.text}
            </div>
        </div>
    </div>`;

        grid.insertAdjacentHTML("beforeend", template);
    }
    console.log("KEY: " + data.correctIndices);

    loadSound(data.tts);

    return data.correctIndices;
}

function loadListen(data, len, thumb = true) {
    if (id == -1) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }

    const percent = (id / len) * 100;
    const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
    progress.style.background = color;

    const itemsLength = data.choices.length;
    input.style.display = "block";
    grid.style.gridTemplateColumns = `repeat(${itemsLength}, 1fr)`;

    heading.textContent = `Nghe và trả lời`;

    heading.insertAdjacentHTML(
        "afterend",
        `<div class="learn-content__speaker" data-delete="true">
                <i class="fa-solid fa-volume-high learn-content__speaker--normal" style="color: #1cb0f6;"></i>
                <i class="fa-solid fa-volume-high learn-content__speaker--slow" style="color: #1cb0f6;"></i>
        </div>`
    );

    document
        .querySelector(".learn-content__speaker--normal")
        .addEventListener("click", () => {
            loadSound(data.tts);
        });

    document
        .querySelector(".learn-content__speaker--slow")
        .addEventListener("click", () => {
            loadSound(data.slowTts);
        });

    const hashtable = {};
    for (let i = 0; i < data.choices.length; i++) {
        hashtable[data.choices[i].text] = i;
    }
    data.choices.sort(() => 0.5 - Math.random());

    for (let i = 0; i < data.choices.length; i++) {
        const choice = data.choices[i];

        const template = `<div  data-id="${
            hashtable[choice.text]
        }" class="learn-content-item learn-content-item--listen">
        ${
            choice.svg
                ? `<div class="learn-content-item__img">
                        <img
                            src="${choice.svg}"
                            alt="learn"
                        />
                  </div>`
                : ""
        }
        <div class="learn-content-item-info">
            <div class="learn-content-item-info__heading">
                ${choice.text}
            </div>
        </div>
    </div>`;

        grid.insertAdjacentHTML("beforeend", template);
    }
    console.log("KEY: " + data.correctIndices);
    loadSound(data.tts);

    return data.correctIndices;
}

progress.addEventListener("click", () => {
    audio.play();
});
function loadSound(link) {
    audio.src = link;
    audio.addEventListener("canplaythrough", function () {
        progress.click();
        // audio.play();
    });
}

function loadFinish() {
    heading.textContent = `Bạn đã hoàn thành bài học`;
    input.style.display = "none";
    learnBtn.textContent = "Trở về";
    learnBtn.classList.add("btn--primary");
    lesson++;
    localStorage.setItem("lesson", lesson);
}
function loadStart() {
    if (id == -1) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }
    heading.textContent = `Chào mừng đến với bài học`;
    input.style.display = "none";
    learnBtn.textContent = "Bắt đầu";
    learnBtn.classList.add("btn--primary");
}

function loadAnswer(type) {}
