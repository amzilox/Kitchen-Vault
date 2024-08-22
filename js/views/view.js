import icons from "url:../../img/sprite.svg";

export class View {
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError();
    this._data = data;

    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  update(data) {
    if (!data) return this.renderError();
    this._data = data;

    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const [...newElements] = newDOM.querySelectorAll("*");
    const [...currElements] = this._parentElement.querySelectorAll("*");

    currElements.forEach((currElem, i) => {
      const newElm = newElements[i];
      if (!newElm) return;
      if (!newElm.isEqualNode(currElem)) {
        currElem.innerHTML = newElm.innerHTML;
      }
    });
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  scrollIntoView() {
    document.querySelector("#App").scrollIntoView({ behavior: "smooth" });
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
             <svg>
                  <use href="${icons}#icon-spinner2"></use>
             </svg>
        </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-warning1"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
        `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._Message) {
    const markup = `
        <div class="message">
                <div>
                  <svg>
                    <use href="${icons}#icon-emoji-flirt"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
        `;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
