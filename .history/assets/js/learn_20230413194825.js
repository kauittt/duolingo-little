async function getData(index) {
    const res = await fetch("http://localhost:3000/duolingo-session1"); // TRUE
    //? Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
    const data = await res.json();
    console.log(data);
    console.log(data[index]);
    return data[index];
}

// 4,5

const heading = document.querySelector(".learn-content__heading");
const grid = document.querySelector(".learn-content-grid");
const learnBtn = document.querySelector(".learn-content .btn");
const closeBtn = document.querySelector(".learn-progress__bar>i");
const progress = document.querySelector(".learn-progress__bar");

let id = -1;

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
        loadLearn();
    }
});
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
loadLearn();

function loadLearn(type, thumb = true) {
    const data = getData(0);
    const len = data.adaptiveChallenges
        ? data.adaptiveChallenges.length
        : 0 + data.challenges.length;
    console.log(len);
    switch (type) {
        case "select":
            break;

        case "listen":

        default:
            break;
    }
    // select: heading-selection(thumb-desc-index)
    //         heading-selection(desc-index)
    // sub-listen: (heading)-(character-sound-text)-(Answer)-(Selection)
    //             (heading)-(sound-slowSound)-(Answer)-(Selection)
    // match-word: 2 columns(es-vn)
}

function loadSelect(thumb = true) {}

function loadListen(thumb = true) {}

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
//     grid.classList.remove("survey-content-flex");
//     learnBtn.style.display = "block";

//     const item = data.items[id];
//     console.log(item.heading);
//     heading.textContent = item.heading;

//     for (let i = 0; i < Object.keys(item.choices).length; i++) {
//         const choice = item.choices[i];

//         const template = `<div class="survey-content-item">

//         ${
//             choice.url
//                 ? `<div class="survey-content-item__img">
//                         <img
//                             src="${choice.url}"
//                             alt="survey"
//                         />
//                   </div>`
//                 : ""
//         }

//         <div class="survey-content-item-info">
//             <div class="survey-content-item-info__heading">
//                 ${choice.heading}
//             </div>

//             ${
//                 "desc" in choice
//                     ? `<div
//             class="survey-content-item-info__desc"
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

    const grid = document.querySelector(".survey-content-grid");
    grid.style.display = "flex";
    grid.classList.add("survey-content-flex");
    learnBtn.style.display = "none";
    // surveyBtn.console.log("work");

    const item = data.items[id];
    console.log(item.heading);
    heading.textContent = item.heading;

    const template = `
    <a href="#!" class="btn btn--primary survey-content-flex__signUp"
        >SIGN UP</a
    >
    <a
        href="#!"
        class="btn  survey-content-flex__logIn"
    >
        SIGN IN
    </a>
`;
    grid.insertAdjacentHTML("beforeend", template);
}
