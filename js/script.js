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


