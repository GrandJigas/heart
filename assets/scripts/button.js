class Button extends Object {
  constructor(text = "Жмяк", create = false, pastTo = document.body) {
    super();
    this.text = text;

    if (create == true) {
      this.create(pastTo);
    }
  }

  create(pastTo = document.body, show = true) {
    super.create(this.text, "btn", pastTo);

    if (show == true) {
      super.show();
    }
  }

  get() {
    return super.get();
  }
}
