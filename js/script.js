/* DROPDOWN MENU */
function giveBurgers() {
  document.getElementById("subLinks").classList.toggle("show");
}

/* ACTIVE LINKS */
var navBar = document.getElementById("nav");
var links = navBar.getElementsByClassName("links");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


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


/* Burger Switch */
function toChicken(){
  var b = document.getElementById("beefCard");
  var c = document.getElementById("chickenCard");
  var v = document.getElementById("veggieCard");
  var cb = document.getElementById("chickenButton");
  var vb = document.getElementById("veggieButton");
  var bb = document.getElementById("beefButton");
  var cbb = document.getElementById("chickenButtonBtn");
  var vbb = document.getElementById("veggieButtonBtn");
  var bbb = document.getElementById("beefButtonBtn");
  b.classList.remove("burger-active");
  b.classList.add("burger-hidden");
  v.classList.remove("burger-active");
  v.classList.add("burger-hidden");
  c.classList.remove("burger-hidden");
  c.classList.add("burger-active");
  cb.classList.remove("burger-active");
  cb.classList.add("burger-hidden");
  bb.classList.remove("burger-hidden");
  bb.classList.add("burger-active");
  vb.classList.remove("burger-hidden");
  vb.classList.add("burger-active");
  vbb.classList.remove("btn-burger-next");
  bbb.classList.add("btn-burger-next");
}

function toVeggie() {
  var b = document.getElementById("beefCard");
  var c = document.getElementById("chickenCard");
  var v = document.getElementById("veggieCard");
  var cb = document.getElementById("chickenButton");
  var vb = document.getElementById("veggieButton");
  var bb = document.getElementById("beefButton");
  var cbb = document.getElementById("chickenButtonBtn");
  var vbb = document.getElementById("veggieButtonBtn");
  var bbb = document.getElementById("beefButtonBtn");
  b.classList.remove("burger-active");
  b.classList.add("burger-hidden");
  c.classList.remove("burger-active");
  c.classList.add("burger-hidden");
  v.classList.remove("burger-hidden");
  v.classList.add("burger-active");
  vb.classList.remove("burger-active");
  vb.classList.add("burger-hidden");
  bb.classList.remove("burger-hidden");
  bb.classList.add("burger-active");
  cb.classList.remove("burger-hidden");
  cb.classList.add("burger-active");
  cbb.classList.add("btn-burger-next");
  bbb.classList.remove("btn-burger-next");  
}

function toBeef() {
  var b = document.getElementById("beefCard");
  var c = document.getElementById("chickenCard");
  var v = document.getElementById("veggieCard");
  var cb = document.getElementById("chickenButton");
  var vb = document.getElementById("veggieButton");
  var bb = document.getElementById("beefButton");
  var cbb = document.getElementById("chickenButtonBtn");
  var vbb = document.getElementById("veggieButtonBtn");
  var bbb = document.getElementById("beefButtonBtn");
  v.classList.remove("burger-active");
  v.classList.add("burger-hidden");
  c.classList.remove("burger-active");
  c.classList.add("burger-hidden");
  b.classList.remove("burger-hidden");
  b.classList.add("burger-active");
  bb.classList.remove("burger-active");
  bb.classList.add("burger-hidden");
  cb.classList.remove("burger-hidden");
  cb.classList.add("burger-active");
  vb.classList.remove("burger-hidden");
  vb.classList.add("burger-active");
  vbb.classList.remove("btn-burger-next");
}
