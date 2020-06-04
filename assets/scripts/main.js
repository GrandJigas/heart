let beatingHeart;
let PATH = "assets/scripts/";

include(PATH + "object.js");
include(PATH + "button.js");
include(PATH + "heart.js");

window.onload = function () {
  let btn = new Button("Жмякни меня", true);
  let canvas = new Heart();
  btn.nextEl = canvas;
};

function include(url) {
  var script = document.createElement("script");
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
