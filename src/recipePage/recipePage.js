function makeRecipePage(recipeObj) {
  clearPage();
  const recipeInfo = parseRecipeData(recipeObj);
  createRecipePage(recipeInfo);
}

function createRecipePage(recipe) {
  createHighlight(recipe);
  createContent(recipe);
}

function createHighlight(recipe) {
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const ul = document.createElement("ul");
  const h3 = document.createElement("h3");
  h3.innerText = "INGREDIENTS";
  ul.append(h3);

  h2.innerText = recipe.name;
  h2.className = "highlight__title";
  img.src = recipe.img;
  img.alt = recipe.name;
  img.className = "highlight__img";

  ul.className = "highlight__description";
  recipe.ingredients.forEach((ing) => {
    const li = document.createElement("li");
    li.innerText = ing;

    ul.append(li);
  });

  const container = document.createElement("div");
  container.append(h2, ul);

  highlight.append(container, img);
}

function createContent(recipe) {
  const ol = document.createElement("ol");
  const h3 = document.createElement("h3");
  h3.innerText = "INSTRUCTIONS";
  ol.append(h3);

  recipe.instructions.forEach((step) => {
    const li = document.createElement("li");
    li.innerText = step;

    ol.append(li);
  });

  content.append(ol);
}

function parseRecipeData(recipeObj) {
  const tempObj = {};
  // adding more info
  // finding instructions
  // finding the name
  tempObj.name = recipeObj.title;
  // INGREDIENTS
  const ings = recipeObj.extendedIngredients;
  tempObj.ingredients = ings ? ings.map((ingObj) => ingObj.name) : [];

  tempObj.img = recipeObj.image;

  const stepsArr = recipeObj.analyzedInstructions[0].steps;
  tempObj.instructions = stepsArr
    ? stepsArr.map((stepObj) => stepObj.step)
    : [];

  return tempObj;
}
