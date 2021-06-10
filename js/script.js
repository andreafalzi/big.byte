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

/* Sponsors cicle */
var navs = $(".card-list > .card-item");
setInterval(function () {
  var cur = $(".card-list > .card-active").index();
  var nxt = (cur + 1) % navs.length;
  navs.eq(cur).removeClass("card-active");
  navs.eq(nxt).addClass("card-active");
}, 4000);
