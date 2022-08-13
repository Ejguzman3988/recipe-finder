const homeTag = document.querySelectorAll("a")[0];
const randomRecipeTag = document.querySelectorAll("a")[1];

makeHomePage();

homeTag.addEventListener("click", (e) => {
  e.preventDefault();
  clearPage();
  makeHomePage();
  // FUNCTION RENDER HOME PAGE
});

randomRecipeTag.addEventListener("click", (e) => {
  e.preventDefault();
  clearPage();
  // FUNCTION RENDER RANDOM RECIPE PAGE
  getARandomRecipe();
});

function getARandomRecipe() {
  fetch(urlGenerator("random"))
    .then((r) => r.json())
    .then((data) => {
      const recipeObj = data.recipes[0];
      makeRecipePage(recipeObj);
    });
}
