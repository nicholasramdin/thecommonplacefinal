const loginButton = document.getElementById("login-button");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordrptInput = document.getElementById("passwordrpt");
const usernameInput = document.getElementById("username");
const message = document.getElementById("login-message");
const signupButton = document.getElementById("signup");
const errorMessage = document.getElementById("error-message");

signupButton.onclick = function () {
    const promise = firebase.auth().createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    promise.catch(function (error) {

        errorMessage.textContent = error.message;

    });
    promise.then(function (credential) {
        createUser(credential.user.uid);
    })
};

function createUser(id) {

    const db = firebase.database();
    const ref = db.ref("users").child(id);
    const promise = ref.update({
        displayName: usernameInput.value
    })

    promise.then(function () {
        location.href = "index.html";

    })
}
