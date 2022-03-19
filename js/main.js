function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = ""
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const forgottenPasswordForm = document.querySelector("#forgottenPassword");
    const indexWelcomeForm = document.querySelector("#indexWelcome");
    
//LINKS
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin2").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        forgottenPasswordForm.classList.add("form--hidden");
    });

    document.querySelector("#linkLogin3").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        indexWelcomeForm.classList.add("form--hidden");
    });

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkForgottenPassword").addEventListener("click", e => {
        e.preventDefault();
        forgottenPasswordForm.classList.remove("form--hidden");
        loginForm.classList.add("form--hidden");
    });

//BUTTONS
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
            //perform SQL/AJAX/Fetch login
        setFormMessage(loginForm, "error", "Invalid user/pw combination!")
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
            //perform SQL/AJAX/Fetch login
        setFormMessage(createAccountForm, "error", "Could not create new account!")
    });

    forgottenPasswordForm.addEventListener("submit", e => {
        e.preventDefault();
            //perform SQL/AJAX/Fetch login
        setFormMessage(forgottenPasswordForm, "error", "This user/mail does not exist!")
    });

//INPUT CONTROLS
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if ( e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be > 10");
            }
        });
        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });


});


