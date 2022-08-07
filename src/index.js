const homeTag = document.querySelectorAll("a")[0];
const randomRecipeTag = document.querySelectorAll("a")[1];

makeHomePage();

homeTag.addEventListener("click", (e) => {
  e.preventDefault();
  highlight.innerHTML = "";
  content.innerHTML = "";
  makeHomePage();
  // FUNCTION RENDER HOME PAGE
});

randomRecipeTag.addEventListener("click", (e) => {
  e.preventDefault();
  highlight.innerHTML = "";
  content.innerHTML = "";
  // FUNCTION RENDER RANDOM RECIPE PAGE
});

function getARandomRecipe() {
  fetch(urlGenerator("random"))
    .then((r) => r.json())
    .then((data) => console.log(data));
}
