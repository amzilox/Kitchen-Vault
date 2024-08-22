import "regenerator-runtime/runtime"; // Provides runtime support for async/await and generators
import { API_URL, RES_PER_PAGE } from "./config";
import { AJAX, TimeoutError, ApiError } from "./helpers";
export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  let { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    servings: recipe.servings,
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}`);

    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some((bookmark) => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    if (error instanceof TimeoutError) {
      throw new Error("The request timed out. Please try again later.");
    } else if (error instanceof ApiError) {
      throw new Error("Could not fetch the recipe. Please try another ID.");
    } else {
      throw error;
    }
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await AJAX(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map((recipe) => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
        ...(recipe.key && { key: recipe.key }),
      };
    });
  } catch (error) {
    if (error instanceof TimeoutError) {
      throw new Error("The request timed out. Please try again later.");
    } else if (error instanceof ApiError) {
      throw new Error("Could not fetch the recipe. Please try another ID.");
    } else {
      throw error;
    }
  }
};

export const resultsPerPage = function (page = 1) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; //0;
  const end = page * state.search.resultsPerPage; //9

  return state.search.results.slice(start, end);
  // return state.search.results.slice(10, 20);
  // return state.search.results.slice(20, 30);
};

export const updateServings = function (newServing) {
  const oldServings = state.recipe.servings;

  state.recipe.ingredients.forEach((ing) => {
    ing.quantity = (ing.quantity * newServing) / oldServings;
  });

  state.recipe.servings = newServing;
};

const presistBookmarks = function () {
  localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);

  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  presistBookmarks();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.indexOf((bookmark) => bookmark.id == id);
  state.bookmarks.splice(index, 1);

  if (id === state.recipe.id) state.recipe.bookmarked = false;

  presistBookmarks();
};

function init() {
  const bookmarksDATA = localStorage.getItem("bookmarks");
  if (bookmarksDATA) [...state.bookmarks] = JSON.parse(bookmarksDATA);
}

init();
