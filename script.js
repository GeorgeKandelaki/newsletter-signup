const btn = document.querySelector(".submit-btn");
const input = document.querySelector("input");
const label = document.querySelector(".forerror");

function validateEmail() {
    console.log(input.value);
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(mailformat)) {
        document.querySelector(".main-card").classList.add("close");
        document.querySelector(".sub-succes").classList.remove("close");
        document.querySelector(".email-place").textContent = input.value;
        // document.form1.text1.focus();
        return true;
    } else {
        label.textContent = "Valid email required!";
        // document.form1.text1.focus();
        return false;
    }
}

btn.addEventListener("click", validateEmail);
document.querySelector(".return-btn").addEventListener("click", function () {
    document.querySelector(".main-card").classList.remove("close");
    document.querySelector(".sub-succes").classList.add("close");
    input.value = "";
});
