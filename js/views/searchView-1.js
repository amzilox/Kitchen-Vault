class SearchView {
  #parentElement = document.querySelector(".about__search");
  #inputField = this.#parentElement.querySelector(".search__field");
  #clearInput() {
    this.#inputField.value = "";
    this.#inputField.blur();
  }

  getQuery() {
    let query = this.#inputField.value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
