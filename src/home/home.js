function getHomeHighlight() {
  fetch(urlGenerator("random"))
    .then((r) => r.json())
    .then((data) => gatherHighlightData(data.recipes[0]));
}

function gatherHighlightData(recipeData) {
  const image = recipeData.image;
  const name = recipeData.title;
  const description = recipeData.summary;
  const recipeObj = {
    name,
    image,
    description,
  };

  createHomeHighlight(recipeObj);
}
function createHomeHighlight(recipeObj) {
  const img = document.createElement("img");
  const title = document.createElement("h2");
  const description = document.createElement("div");

  img.src = recipeObj.image;
  img.alt = recipeObj.name;
  img.className = "highlight__img";

  title.textContent = recipeObj.name;
  title.className = "highlight__title";

  description.innerHTML = recipeObj.description.slice(0, 100) + "...";
  description.className = "highlight__description";

  const container = document.createElement("div");
  container.append(title, description);

  highlight.append(container, img);
}

function getHomeContent() {
  fetch(urlGenerator("random") + "&number=3")
    .then((r) => r.json())
    .then((data) => gatherContentData(data.recipes));
}

function gatherContentData(recipeObjs) {
  recipeObjs.forEach((recipeObj) => createARecipeCard(recipeObj));
}

function createARecipeCard(recipeObj) {
  const card = document.createElement("div");
  const title = document.createElement("div");

  title.textContent = recipeObj.title;
  card.style.backgroundImage = `url(${recipeObj.image})`;
  card.className = "card";

  card.append(title);
  content.append(card);
}

// getHomeHighlight();
// getHomeContent();

function makeHomePage() {
  getHomeHighlight();
  getHomeContent();
}
