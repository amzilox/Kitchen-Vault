import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import searchView1 from "./views/searchView-1.js";
import "core-js/stable"; // Includes all the polyfills for stable features
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import bookmarksView from "./views/bookmarksView.js";
import {
  setupStickyNav,
  initScrl,
  buttonScrlSetup,
  setupGSAPAnimations,
  preLoader,
  revealSectionFunc,
} from "./views/gsap-Animation.js";

///////////////////////////////////////
function initializeApp() {
  // GSAP Animation:
  setupGSAPAnimations();
  // Sticky Nav :
  setupStickyNav();
  // Button Scroll :
  buttonScrlSetup();
  // Scroll into App UI after Submit event :
  initScrl();
  // PreLoader :
  preLoader();
  // Reveal sections:
  revealSectionFunc();
}
initializeApp();
///////////////////////////////////////

async function controlRecipes(id) {
  try {
    bookmarksView.render(model.state.bookmarks);
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.scrollIntoView();
    recipeView.renderSpinner();

    // 0) Update result Preview:
    resultsView.update(model.resultsPerPage());

    // 0.1) Update bookmarks:
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe:
    await model.loadRecipe(id);

    // 2) Rendering recipe:
    recipeView.render(model.state.recipe);
  } catch (error) {
    if (error.message === "The request timed out. Please try again later.") {
      recipeView.renderError("The request timed out. Please try again later.");
    } else if (
      error.message === "Could not fetch the recipe. Please try another ID."
    ) {
      recipeView.renderError();
    } else {
      recipeView.renderError("An unexpected error occurred. Please try again.");
    }
  }
}

async function controlSearchResults(page) {
  try {
    resultsView.renderSpinner();
    let query = searchView.getQuery();
    if (!query) query = searchView1.getQuery();
    recipeView.scrollIntoView();
    if (!query) return;
    await model.loadSearchResults(query);

    // resultsView.render(model.state.search.results);
    resultsView.render(model.resultsPerPage(1));

    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
}

function controlPagination(page) {
  resultsView.render(model.resultsPerPage(page));
  paginationView.render(model.state.search);
}

function controlUpdateServings(newServing) {
  model.updateServings(newServing);
  recipeView.update(model.state.recipe);
}

function controlBookmarks() {
  // 1) Add/ remove Bookmarks:
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view:
  recipeView.update(model.state.recipe);

  // 3) Render the bookmarks:
  bookmarksView.render(model.state.bookmarks);
}

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServ(controlUpdateServings);
  recipeView.addHandlerBookmarks(controlBookmarks);
  searchView.addHandlerSearch(controlSearchResults);
  searchView1.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerPagination(controlPagination);
  controlRecipes();
};
init();
