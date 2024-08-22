import icons from "url:../../img/sprite.svg";
import Fraction from "fraction.js";
import { View } from "./view";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _errorMessage = "We could not find that recipe. Please try another one!";
  _Message = "";

  addHandlerRender(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  addHandlerUpdateServ(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--increase-servings");
      if (!btn) return;

      const newServing = +btn.dataset.updateServ;
      if (newServing <= 0) return;
      handler(newServing);
    });
  }

  addHandlerBookmarks(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--bookmark");
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <figure class="recipe__fig">
           <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
           <h1 class="recipe__title">
             <span>${this._data.title}</span>
           </h1>
         </figure>
 
         <div class="recipe__details">
           <div class="recipe__info">
             <svg class="recipe__info-icon">
               <use href="${icons}#icon-stopwatch"></use>
             </svg>
             <span class="recipe__info-data recipe__info-data--minutes">${
               this._data.cookingTime
             }</span>
             <span class="recipe__info-text">minutes</span>
           </div>
           <div class="recipe__info">
             <svg class="recipe__info-icon">
               <use href="${icons}#icon-users"></use>
             </svg>
             <span class="recipe__info-data recipe__info-data--people">${
               this._data.servings
             }</span>
             <span class="recipe__info-text">servings</span>
 
             <div class="recipe__info-buttons">
               <button class="btn--tiny btn--increase-servings" data-update-serv ="${
                 this._data.servings - 1
               }">
                 <svg>
                   <use href="${icons}#icon-remove_circle_outline"></use>
                 </svg>
               </button>
               <button class="btn--tiny btn--increase-servings" data-update-serv ="${
                 this._data.servings + 1
               }">
                 <svg>
                   <use href="${icons}#icon-add_circle_outline"></use>
                 </svg>
               </button>
             </div>
           </div>
 
           <div class="recipe__user-generated ${
             this._data.key ? "" : "hidden"
           }">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
           </div>
           <button class="btn--round btn--bookmark">
             <svg class="${this._data.bookmarked ? "fullfilled" : ""}">
               <use href="${icons}#icon-heart"></use>
             </svg>
           </button>
         </div>
 
         <div class="recipe__ingredients">
           <h2 class="heading--2">Recipe ingredients</h2>
           <ul class="recipe__ingredient-list">
 
             ${this._data.ingredients.map(this._generateMarkupIng).join("")}
       
           </ul>
         </div>
 
         <div class="recipe__directions">
           <h2 class="heading--2">How to cook it</h2>
           <p class="recipe__directions-text">
             This recipe was carefully designed and tested by
             <span class="recipe__publisher">${
               this._data.publisher
             }</span>. Please check out
             directions at their website.
           </p>
           <a
             class="btn--small recipe__btn"
             href="${this._data.sourceUrl}"
             target="_blank"
           >
             <span>Directions</span>
             <svg class="search__icon">
               <use href="${icons}#icon-arrow-long-right"></use>
             </svg>
           </a>
         </div>
    `;
  }

  _generateMarkupIng(ing) {
    return `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ing.quantity ? new Fraction(ing.quantity).toFraction(true) : ""
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>`;
  }
}

export default new RecipeView();
