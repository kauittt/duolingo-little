const data = {
    items: {
        0: {
            heading: "Bạn biết tới Duolingo từ đâu?",
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/b2a0faf7b835cf2ab9a75afe033fdad9.svg",
                    heading: "TV",
                },

                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/947546a876aaea3a9811abf4cca1b618.svg",
                    heading: "Bạn bè/Gia đình",
                },

                2: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/0d0c3c81ccd1fd2ea84371e6bf4546b3.svg",
                    heading: "Tin tức/Báo chí",
                },

                3: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/8e3f5e058dd4dd5eb43646c2d1f19b3c.svg",
                    heading: "Tìm kiếm Google",
                },

                4: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/9eb3a5707704c76b653a5e85fbf9ca0e.svg",
                    heading: "Facebook/Instagram",
                },

                5: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/f2969a78ee365da5e7676dc6afd8c1b4.svg",
                    heading: "TikTok",
                },

                6: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/5ae4d4bc2af930b5bc002b5d0b7cbad7.svg",
                    heading: "Youtube",
                },

                7: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg",
                    heading: "Khác",
                },
            },
        },
        1: {
            heading: "Tại sao bạn học ngoại ngữ?",
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/23221cb0c6f3000161a43c62db95329a.svg",
                    heading: "Cơ hội nghề nghiệp",
                },

                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/cbb1ff58ab02348bfece9033f9fc02b7.svg",
                    heading: "Văn hóa",
                },

                2: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/fbcf7ddad59a2c199b2e5e0b5dc4f601.svg",
                    heading: "Du lịch",
                },

                3: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/c5beffef0ff1a60393cdcb3bfa521644.svg",
                    heading: "Luyện trí não",
                },

                4: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/4fa9bfb1088c948b045e1f134a96c729.svg",
                    heading: "Kết bạn và sẻ chia",
                },

                5: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/5404fff07b7cd0e1244baa3982f2384c.svg",
                    heading: "Học tập",
                },

                6: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/userMotivationSurvey/f10fcc23a95fb167ef9a449eed240482.svg",
                    heading: "Khác",
                },
                // ,

                // 7: {
                //     url: "https://d35aaqx5ub95lt.cloudfront.net/images/hdyhau/d4419d84cb57b1295591e05cd60e45fb.svg",
                //     heading: "Khác",
                // },
            },
        },
        2: {
            heading:
                "Tuyệt vời. Bây giờ bạn hãy chọn mục tiêu luyện tập mỗi ngày.",
            choices: {
                0: {
                    heading: "Dễ",
                    desc: "5 phút / ngày",
                },

                1: {
                    heading: "Vừa",
                    desc: "10 phút / ngày",
                },
                2: {
                    heading: "Khó",
                    desc: "15 phút / ngày",
                },
                3: {
                    heading: "Siêu khó",
                    desc: "20 phút / ngày",
                },
            },
        },
        3: {
            heading:
                "Hãy để Duolingo giúp bạn giữ vững mục tiêu hàng ngày nhé?",
            choices: {
                0: {
                    icon: `<i class="fa-brands fa-facebook"></i>`,
                    heading: "TIẾP TỤC BẰNG FACEBOOK",
                },

                1: {
                    icon: `<i class="fa-brands fa-google"></i>`,
                    heading: "TIẾP TỤC BẰNG GOOGLE",
                },
                3: {
                    icon: null,
                    heading: "KHÔNG PHẢI BÂY GIỜ",
                },
            },
        },
        4: {
            heading: "Chọn hướng đi của bạn",
            choices: {
                0: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/owls/3ddd27fd32d1910636ead35ea966b488.svg",
                    heading: "Đây là lần đầu bạn học Tiếng Anh?",
                    desc: "Bắt đầu từ bài tập cơ bản nhé!",
                },
                1: {
                    url: "https://d35aaqx5ub95lt.cloudfront.net/images/owls/84d58856b19e9d0ec3c59cb014139853.svg",
                    heading: "Bạn đã biết một chút Tiếng Anh?",
                    desc: "Hãy tiếp tục cố gắng nhé!",
                },
            },
        },
    },
};

const heading = document.querySelector(".survey-content__heading");
const grid = document.querySelector(".survey-content-grid");
const surveyBtn = document.querySelector(".survey-content .btn");
const closeBtn = document.querySelector(".survey-progress__bar>i");

let id = 0;
console.log(data);

closeBtn.addEventListener("click", function (e) {
    console.log(id);
    if (!id) window.open("login.html", "_self");
});
surveyBtn.addEventListener("click", function (e) {
    if (surveyBtn.classList.contains("btn--primary")) {
        grid.innerHTML = "";
        surveyBtn.classList.remove("btn--primary");
        console.log(`ID: ${id}`);
        id < 3 ? loadSurvey() : loadLogIn();
    }
});
loadSurvey();

document.body.addEventListener("click", function (e) {
    if (e.target.closest(".survey-content-item")) {
        const items = document.querySelectorAll(".survey-content-item");
        items.forEach((item) => {
            item.classList.remove("survey-content-item--selected");
        });

        e.target
            .closest(".survey-content-item")
            .classList.add("survey-content-item--selected");

        surveyBtn.classList.add("btn--primary");
    }
});

function loadSurvey() {
    const item = data.items[id];
    console.log(item.heading);
    heading.textContent = item.heading;

    console.log(Object.keys(item.choices).length);
    for (let i = 0; i < Object.keys(item.choices).length; i++) {
        const choice = item.choices[i];
        // console.log(choice);

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
    id++;
}

function loadLogIn() {
    const grid = document.querySelector(".survey-content-grid");
    grid.style.display = "flex";
    grid.classList.add("survey-content-flex");
    surveyBtn.style.display = "none";
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
        <a href="./index.html" class="btn btn--primary modal-content-form__btn">Sign in</a>
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
        <a href="./index.html" class="btn  btn--primary modal-content-form__btn">Sign up</a>
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
