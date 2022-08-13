const RECIPE_URL = "https://api.spoonacular.com/recipes";
const highlight = document.querySelector("#highlight");
const content = document.querySelector("#content");

// urlGenerator('random')
// https://api.spoonacular.com/recipes/random/?apiKey=12389`12789
function urlGenerator(endPoint = "") {
  return RECIPE_URL + "/" + endPoint + "?apiKey=" + API_KEY;
}

function clearPage() {
  highlight.innerHTML = "";
  content.innerHTML = "";
}
