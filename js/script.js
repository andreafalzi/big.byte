/* --- Show Menu --- */
function showMenu() {
  var x = document.getElementById("menu");
  x.classList.toggle("responsive");
}

document.onclick = function (e) {
  var x = document.getElementById("menu");
  if (e.target.id !== "burgerMenu" && e.target.id !== "menu") {
    x.classList.remove("responsive");
  }
};

/* --- Contact E-mail --- */
const email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Invalid email or password. please try again!");
  } else {
    email.setCustomValidity("");
  }
});

/* --- Contact Submit OnMouseover --- */
function SubmitHoverIn() {
  var x = document.getElementById("Submit");
  x.style.transition = "all 2s";
  x.style.backgroundColor = "#0a5c24";
  setTimeout(function () {
    x.style.transition = "all 2s";
    x.style.backgroundColor = "#14A642";
  }, 1000);
}

/* --- Chat box open and close --- */
function openChatForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("open-chat").style.zIndex = "0";
}

function closeChatForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open-chat").style.zIndex = "10";
}

function SendFeedback() {
  document.getElementById("FeedbackArea").value = "Thank you for your feedback..";
  setTimeout(function(){ 
    document.getElementById("FeedbackArea").value = ""; 
  }, 2500);
}