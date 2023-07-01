const errorP = document.querySelector(".error_message");
const errorEmail = document.querySelector("#email");
function errorMessage() {
    errorEmail.classList.add("error");
    errorP.style.opacity = 1;
};

//success
const successPage = document.querySelector("#success_page");
const signupPage = document.querySelector("#signup_page");
const form = document.querySelector("#subscribe");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    successPage.classList.remove("hidden");
    signupPage.classList.add("hidden");
});
