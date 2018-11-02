var link = document.querySelectorAll(".js-order");
var popup = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
    }
  }
});

if (overlay) {
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
  });
}
