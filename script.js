const button = document.getElementsByClassName("start-btn")[0];
const warning = document.getElementsByClassName("allert")[0];
const inputMail = document.getElementById("email");
const buttonAccess = document.getElementById("access-start-btn");
const warningAccess = document.getElementsByClassName("access-alert")[0];
const inputMail2 = document.getElementById("access-email");

const chekemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

button.addEventListener("click", (event) => {
  if (inputMail.value.match(chekemail)) {
    warning.style.display = "none";
  } else {
    warning.style.display = "block";
  }
});

buttonAccess.addEventListener("click", (event) => {
  if (inputMail2.value.match(chekemail)) {
    warningAccess.style.display = "none";
  } else {
    warningAccess.style.display = "block";
  }
});
