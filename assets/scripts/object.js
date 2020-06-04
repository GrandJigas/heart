class Object {
  el = null;
  nextEl = null;

  constructor() {}

  create(text, classEl, pastTo) {
    let el = document.createElement("div");
    el.classList.add(classEl);
    el.innerHTML = text;
    pastTo.appendChild(el);
    this.el = el;

    // объект текущего эдемента
    let obj = this;
    // при нажатии скрывает элемент и открывает следующий
    el.addEventListener("click", function () {
      hide(el);
      console.log(obj.nextEl);

      setTimeout(function () {
        obj.nextEl.create();
      }, 600);
    });
  }

  show(interval = 1000) {
    let el = this.el;

    setTimeout(function () {
      el.classList.add("show");
    }, interval);
  }

  hide() {
    hide(this.el);
  }

  get() {
    return this.el;
  }
}

function hide(el) {
  el.classList.remove("show");
  el.classList.add("hide");

  setTimeout(function () {
    el.remove();
  }, 600);
}
