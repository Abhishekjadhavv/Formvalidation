
const ComPassword = document.querySelector("#Cpassword");
const hideBtn = document.querySelectorAll(".hide-btn");


let sign_form = document.querySelector("#sign_form");
let email = document.querySelector("#email");
let user_name = document.querySelector("#username");
let Password = document.querySelector("#password");
let alertMsg = document.querySelector('.alert'),
    alertSpan = document.querySelector('.alert span');



hideBtn[0].addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    hideBtn[0].classList.toggle('bxs-show');
});

hideBtn[1].addEventListener("click", () => {
    ComPassword.type = ComPassword.type === "password" ? "text" : "password";
    hideBtn[1].classList.toggle('bxs-show');
});

// Form submit form js 
sign_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email_value = email.value;
    let msg, email_vali = true, user_vali = true, pass_vali = true, com_pass = true;

    if (email.value === "" && user_name.value === "" && password.value === "" && ComPassword.value === "") {
        msg = "Please fill out fields.";
        alertMsg.classList.add("active");
        alertSpan.innerText = msg;
        setTimeout(() => {
            alertMsg.classList.remove("active");
        }, 4000);
        return;
    }

    //validate Email
    let reg = /^([0-9a-zA-Z]+)\@([a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
    // validate name here
    let userName = /^[a-zA-Z]([0-9a-zA-Z]){4,100}$/;
    // validate Password here
    let pass = /^([\%\!\_\-\?\/\$ \@\&\#\.a-zA-Z0-9]){8,50}$/;

    if (!reg.test(email_value)) {
        msg = "Your email must be valid..!";
        email_vali = false;
    }
    else if (!pass.test(Password.value)) {
        msg = "Password must be at least 8 characters";
        pass_vali = false;
    }
    else if (!userName.test(user_name.value)) {
        msg = "User name must be at least 5 characters";
        user_vali = false;
    }

    if (Password.value !== ComPassword.value) {
        msg = "Your password and confirmation password do not match."
        com_pass = false;
    }

    if (email_vali && user_vali && pass_vali && com_pass) {
        msg = "Thanks for filling out our form!🙌";
        alertMsg.classList.add("active");
        alertSpan.innerText = msg;
    } else {
        alertMsg.classList.add("active");
        alertSpan.innerText = msg;
    }
    setTimeout(() => {
        alertMsg.classList.remove("active");
    }, 4000);
});


