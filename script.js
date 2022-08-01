const register_btn = document.getElementById("register");
const login_btn = document.getElementById("login");

register_btn.addEventListener("click", userSignUp);
login_btn.addEventListener("click", userSignIn);
function userSignUp() {
  const email = document.getElementById("emailr").value.trim();
  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("Phone").value.trim();
  const password = document.getElementById("passwordr").value.trim();
  fetch("http://localhost:3000/signup", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => {
      //   console.log(json);
      if (json.message == "succesfull") {
        console.log("Your accout has been successfully registered");
        const allForm = document.querySelectorAll("form");
        const form = document.querySelector(`form.login`);

        allForm.forEach((item) => {
          item.classList.remove("active");
        });
        form.classList.add("active");
      } else {
        console.log(json.message);
      }
    });
}

function userSignIn() {
  const login_email = document.getElementById("emaill").value.trim();
  const login_pwd = document.getElementById("passwordl").value.trim();
  fetch("http://localhost:3000/signin", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      email: login_email,
      password: login_pwd,
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => {
      //   console.log(json);
      if (json.message == "success") {
        console.log("You are successfully sign in to your accout");
      } else {
        console.log(json.message);
      }
    });
}

function switchForm(className, e) {
  e.preventDefault();
  const allForm = document.querySelectorAll("form");
  const form = document.querySelector(`form.${className}`);

  allForm.forEach((item) => {
    item.classList.remove("active");
  });
  form.classList.add("active");
}

const registerPassword = document.querySelector("form.register #password");
const registerConfirmPassword = document.querySelector(
  "form.register #confirm-pass"
);

registerPassword.addEventListener("input", function () {
  registerConfirmPassword.pattern = `${this.value}`;
});
