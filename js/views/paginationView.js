import { View } from "./view";
import icons from "url:../../img/sprite.svg";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerPagination(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;
      const goTo = +btn.dataset.page;

      handler(goTo);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 there are other pages
    if (numPages > 1 && currPage == 1)
      return `
        <button data-page= "${
          currPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-long-right"></use>
            </svg>
        </button>
    `;

    // Page 1 there are no other pages
    if (numPages == 1) return "";

    // Last Page
    if (numPages == currPage)
      return `
          <button data-page= "${
            currPage - 1
          }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-long-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
    `;

    // Other Page
    if (numPages !== 1 && numPages !== currPage)
      return `
        <button data-page= "${
          currPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-long-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
        </button>
        <button data-page= "${
          currPage + 1
        }" class="btn--inline pagination__btn--next">
            <span>Page ${currPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-long-right"></use>
            </svg>
        </button>
    `;
  }
}

export default new PaginationView();
