const stories = [doctor, coat, passport];
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

learnBtn.addEventListener("click", function (e) {
    if (learnBtn.classList.contains("btn--primary")) {
        learnBtn.classList.remove("btn--primary");
    }
});
loadLearn();

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

function loadLearn() {
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

//! MODAL - DISPLAY
const signInBtn = document.querySelector(".survey-content-flex__logIn");
const signUpBtn = document.querySelector(".survey-content-flex__signUp");
const tmpSignIn = ` <div class="modal">
<div class="modal-content modal-logIn">
    <div class="modal-content-name">
        <p class="modal-content-name__text">Sign in</p>
        <i
            class="fa-solid fa-circle-xmark modal-content-name__icon"
        ></i>
    </div>

    <form class="modal-content-form">
    <input
    type="text"
    name=""
    class="modal-content-form__input email"
    placeholder="Email"
/>
<div class="modal-content-form-email-check">
    <i
        class="fa-solid fa-circle-xmark modal-content-form-email-check__item modal-content-form-email-check__item--time"
    ></i>
    <i
        class="fa-solid fa-circle-check modal-content-form-email-check__item modal-content-form-email-check__item--check"
    ></i>
</div>
        <input
            type="password"
            name=""
            class="modal-content-form__input"
            placeholder="Password"
        />
        <i class="fa-solid fa-eye password-eye"></i>
        <a href="#!" class="modal-content-form__forgot">
            Forgot your password?
        </a>
        <a href="./home.html" class="btn btn--primary modal-content-form__btn">Sign in</a>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signIn">
            Don't have an account? Sign up
        </a>
    </div>
</div>
</div>`;
const tmpSignUp = `<div class="modal">
<div class="modal-content modal-signUp">
    <div class="modal-content-name">
        <p class="modal-content-name__text">Sign up</p>
        <i
            class="fa-solid fa-circle-xmark modal-content-name__icon"
        ></i>
    </div>

    <form class="modal-content-form">
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input email"
            placeholder="Email"
        />
        <div class="modal-content-form-email-check">
            <i
                class="fa-solid fa-circle-xmark modal-content-form-email-check__item modal-content-form-email-check__item--time"
            ></i>
            <i
                class="fa-solid fa-circle-check modal-content-form-email-check__item modal-content-form-email-check__item--check"
            ></i>
        </div>
        <input
            type="text"
            name=""
            id=""
            class="modal-content-form__input password"
            placeholder="Password"
        />
        <div class="modal-content-form-password-check">
            <i
                class="fa-solid fa-circle-check modal-content-form-password-check__item"
            ></i>
        </div>
        <div class="modal-content-form-check">
            <p class="modal-content-form-check__item">
                * 8-12 chars
            </p>
            <p class="modal-content-form-check__item">
                * 1 uppercase
            </p>
            <p class="modal-content-form-check__item">
                * 1 number
            </p>
            <p class="modal-content-form-check__item">
                * 1 special character
            </p>
        </div>
        <a href="./home.html" class="btn  btn--primary modal-content-form__btn">Sign up</a>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signUp">
            Already have an account? Sign in
        </a>
    </div>
</div>
</div>`;

document.body.addEventListener("click", function (e) {
    if (e.target.closest(".survey-content-flex__logIn")) {
        console.log("in");
        document.body.insertAdjacentHTML("beforeend", tmpSignIn);
    } else if (e.target.closest(".survey-content-flex__signUp")) {
        console.log("up");
        document.body.insertAdjacentHTML("beforeend", tmpSignUp);
    }
});

document.body.addEventListener("click", function (e) {
    //! close modal
    if (e.target.matches(".modal")) {
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".modal-content-name__icon")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    } else if (e.target.matches(".modal-content-form__btn")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
        //! toggle signIn signUp
    } else if (e.target.matches(".modal-content-more__signUp")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
        document.body.insertAdjacentHTML("beforeend", tmpSignIn);
    } else if (e.target.matches(".modal-content-more__signIn")) {
        const modal = e.target.parentNode.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
        document.body.insertAdjacentHTML("beforeend", tmpSignUp);
        const password = document.querySelector(".password");
        password.addEventListener("focus", function (e) {
            e.target.addEventListener("input", handlePasswordCheck);
        });
        //! regex
    } else if (e.target.matches(".email")) {
        const icons = document.querySelector(".modal-content-form-email-check");
        const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        e.target.addEventListener("input", function (input) {
            if (!input.target.value) {
                icons.classList.remove("error");
                icons.classList.remove("valid");
                return;
            }

            if (regex.test(input.target.value)) {
                icons.classList.add("valid");
                icons.classList.remove("error");
            } else {
                icons.classList.remove("valid");
                icons.classList.add("error");
            }
        });
        //! password
    } else if (e.target.matches(".password")) {
        e.target.addEventListener("input", handlePasswordCheck);
        //! eyes
    } else if (e.target.matches(".password-eye")) {
        const eye = document.querySelector(".password-eye");
        const input = eye.previousElementSibling;
        if (eye.classList.contains("fa-eye-slash")) {
            input.setAttribute("type", "password");
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        } else {
            input.setAttribute("type", "text");
            eye.classList.add("fa-eye-slash");
            eye.classList.remove("fa-eye");
        }
    }
});

function handlePasswordCheck(E) {
    const items = document.querySelectorAll(".modal-content-form-check__item");
    const passwordCheck = document.querySelector(
        ".modal-content-form-password-check"
    );
    let count = 0;
    function handleValid(item, regex, input) {
        if (regex.test(input)) {
            item.classList.add("valid");
            return true;
        } else {
            item.classList.remove("valid");
            return false;
        }
    }

    if (E.target.value.length >= 8 && E.target.value.length <= 12) {
        items[0].classList.add("valid");
        count++;
    } else {
        items[0].classList.remove("valid");
        count++;
    }

    handleValid(items[1], /[A-Z]/, E.target.value) ? count++ : count--;
    handleValid(items[2], /\d/, E.target.value) ? count++ : count--;
    handleValid(
        items[3],
        /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/,
        E.target.value
    )
        ? count++
        : count--;
    if (count == 4) {
        passwordCheck.classList.add("valid");
    } else {
        passwordCheck.classList.remove("valid");
    }
}
