async function getData(index) {
    const res = await fetch("http://localhost:3000/duolingo-session1");
    let data = await res.json();
    console.log(data);
    data = data[index];

    // console.log(data);

    const adap = data.adaptiveChallenges || [];
    const challenges = data.challenges;

    return [...adap, ...challenges];
    //! combined
}

// 4,5

const heading = document.querySelector(".learn-content__heading");
const grid = document.querySelector(".learn-content-grid");
const learnBtn = document.querySelector(".learn-content .btn");
const closeBtn = document.querySelector(".learn-progress__bar>i");
const progress = document.querySelector(".learn-progress__bar");
const input = document.querySelector(".learn-content__input");

let id = -1;
let key = [];
let answer = [];

closeBtn.addEventListener("click", function (e) {
    if (!id) {
        window.open("home.html", "_self");
        return;
    }

    id--;
    if (!id) {
        closeBtn.classList.remove("fa-arrow-left");
        closeBtn.classList.add("fa-xmark");
    } else {
        closeBtn.classList.add("fa-arrow-left");
        closeBtn.classList.remove("fa-xmark");
    }
    id--;
    grid.innerHTML = "";
    learnBtn.classList.remove("btn--primary");
    loadLearn();
});
learnBtn.addEventListener("click", function (e) {
    if (learnBtn.classList.contains("btn--primary")) {
        grid.innerHTML = "";
        learnBtn.classList.remove("btn--primary");

        //!!!!!
        loadLearn(++id);
    }
});
document.body.addEventListener("click", function (e) {
    if (e.target.closest(".learn-content-item--listen")) {
        const item = e.target.closest(".learn-content-item--listen");

        if (item.classList.contains("learn-content-item--selected")) {
            item.classList.remove("learn-content-item--selected");
            const index = answer.indexOf(+item.dataset.id);
            answer.splice(index, 1);
            inputValue.splice(index, 1);
        } else {
            item.classList.add("learn-content-item--selected");
            answer.push(+item.dataset.id);
            inputValue.push(
                item.querySelector(".learn-content-item-info__heading")
                    .textContent
            );
        }
        console.log(answer);
        console.log(inputValue);

        const items = document.querySelectorAll(".learn-content-item");
        learnBtn.classList.remove("btn--primary");

        items.forEach((item) => {
            if (item.classList.contains("learn-content-item--selected")) {
                learnBtn.classList.add("btn--primary");
            }
        });

        // input.value +=
        //             item
        //                 .querySelector(".learn-content-item-info__heading")
        //                 .textContent.trim() + " ";
        // console.log(input.value);
    } else if (e.target.closest(".learn-content-item--listasdasd")) {
        const items = document.querySelectorAll(".learn-content-item");
        items.forEach((item) => {
            item.classList.remove("learn-content-item--selected");
        });

        e.target
            .closest(".learn-content-item")
            .classList.add("learn-content-item--selected");

        learnBtn.classList.add("btn--primary");
    }
});

loadLearn(++id);

async function loadLearn(index, thumb = true) {
    //! index

    console.log(id);
    const data = await getData(0);
    console.log(data);
    const item = data[index];
    // console.log(data.beginner);
    console.log(item);

    //!index
    switch (item.type) {
        case "select":
            key = loadSelect(item, data.length);
            //!index
            break;

        case "translate":
            key = loadListen(item, data.length, item.character);
        default:
            break;
    }
    // select: heading-selection(thumb-desc-index)
    //         heading-selection(desc-index)
    // sub-listen: (heading)-(character-sound-text)-(Answer)-(Selection)
    //             (heading)-(sound-slowSound)-(Answer)-(Selection)
    // match-word: 2 columns(es-vn)
}

function loadSelect(data, len, thumb = true) {
    console.log(data); //!item

    if (!id) {
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
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${itemsLength}, minmax(0, 1fr))`;

    // const item = data.items[id];
    // console.log(item.heading);
    heading.textContent = `Đâu là "${data.prompt}"`;

    for (let i = 0; i < data.choices.length; i++) {
        const choice = data.choices[i];

        const template = `<div data-id="${i}" class="learn-content-item  ${
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

    console.log(data.correctIndex);
    return data.correctIndex;
}

function loadListen(data, len, thumb = true) {
    console.log(data); //!item

    if (!id) {
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
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${itemsLength}, 1fr)`;

    heading.textContent = `Viết lại bằng "${
        data.targetLanguage == "en" ? "Tiếng Anh" : "Tiếng Việt"
    }"`;

    heading.insertAdjacentHTML(
        "afterend",
        `<div class="learn-content__character">
        <img
            src=${data.character.image.svg}
            alt=""
        />

        <p class="learn-content__character__message ">
            ${data.prompt}
        </p>
    </div>`
    );

    for (let i = 0; i < data.choices.length; i++) {
        const choice = data.choices[i];

        const template = `<div  data-id="${i}" class="learn-content-item learn-content-item--listen">
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
    console.log(data.correctIndices);
    return data.correctIndices;
}

function loadAnswer(type) {}

// function loadLearn() {
//     id++;

//     if (!id) {
//         closeBtn.classList.remove("fa-arrow-left");
//         closeBtn.classList.add("fa-xmark");
//     } else {
//         closeBtn.classList.add("fa-arrow-left");
//         closeBtn.classList.remove("fa-xmark");
//     }

//     const percent = (id / 4) * 100;
//     const color = `linear-gradient(90deg, #58cc02 ${percent}%, rgb(229, 229, 229) ${percent}%)`;
//     progress.style.background = color;

//     grid.style.display = "grid";
//     grid.classList.remove("learn-content-flex");
//     learnBtn.style.display = "block";

//     const item = data.items[id];
//     console.log(item.heading);
//     heading.textContent = item.heading;

//     for (let i = 0; i < Object.keys(item.choices).length; i++) {
//         const choice = item.choices[i];

//         const template = `<div class="learn-content-item">

//         ${
//             choice.url
//                 ? `<div class="learn-content-item__img">
//                         <img
//                             src="${choice.url}"
//                             alt="learn"
//                         />
//                   </div>`
//                 : ""
//         }

//         <div class="learn-content-item-info">
//             <div class="learn-content-item-info__heading">
//                 ${choice.heading}
//             </div>

//             ${
//                 "desc" in choice
//                     ? `<div
//             class="learn-content-item-info__desc"
//         >
//             ${choice.desc}
//         </div>`
//                     : ""
//             }

//         </div>
//     </div>`;

//         grid.insertAdjacentHTML("beforeend", template);
//     }
// }

function loadLogIn() {
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

    const grid = document.querySelector(".learn-content-grid");
    grid.style.display = "flex";
    grid.classList.add("learn-content-flex");
    learnBtn.style.display = "none";
    // learnBtn.console.log("work");

    const item = data.items[id];
    console.log(item.heading);
    heading.textContent = item.heading;

    const template = `
    <a href="#!" class="btn btn--primary learn-content-flex__signUp"
        >SIGN UP</a
    >
    <a
        href="#!"
        class="btn  learn-content-flex__logIn"
    >
        SIGN IN
    </a>
`;
    grid.insertAdjacentHTML("beforeend", template);
}
