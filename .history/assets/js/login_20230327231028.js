//! MODAL - DISPLAY
const signInBtn = document.querySelector(".hero-content-select__signIn");
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
        <p class="btn btn--primary modal-content-form__btn">Sign in</p>
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
        <div class="btn  btn--primarymodal-content-form__btn">Sign up</div>
    </form>

    <div class="modal-content-more">
        <a href="#!" class="modal-content-more__signUp">
            Already have an account? Sign in
        </a>
    </div>
</div>
</div>`;

signInBtn.addEventListener("click", function (e) {
    document.body.insertAdjacentHTML("beforeend", tmpSignIn);
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
        signInBtn.click();
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
