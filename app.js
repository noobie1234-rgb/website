console.log("Running")

const CheckButton = document.getElementById("checkPassword")
const passwordBox = document.getElementById("passwordBox")
const gatekeptdiv = document.getElementById("gatekeptRow")
gatekeptdiv.style.display = "none";
gatekeptdiv.style.marginTop = "25px";

CheckButton.addEventListener("click", password)

function password() {
    if (passwordBox.value === "1234") {
        gatekeptdiv.style.display = "flex";
    }
}