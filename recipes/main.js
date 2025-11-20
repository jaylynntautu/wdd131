import recipes from "./recipes.mjs";

/* ---------- RANDOM FUNCTIONS ---------- */

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  const listLength = list.length;
  const randomNum = random(listLength);
  return list[randomNum];
}

/* ---------- TEMPLATE FUNCTIONS ---------- */

function tagsTemplate(tags) {
  let html = "";

  tags.forEach((tag) => {
    html += `<span class="tag">${tag}</span>`;
  });

  return html;
}

function ratingTemplate(rating) {
  let html = `
    <span
      class="rating"
      role="img"
      aria-label="Rating: ${rating} out of 5 stars"
    >
  `;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `⭐`;
    } else {
      html += `☆`;
    }
  }

  html += `</span>`;

  return html;
}

function recipeTemplate(recipe) {
  return `
    <img src="images/${recipe.image}" alt="${recipe.name}">

    <div class="recipe-info">

      ${tagsTemplate(recipe.tags)}

      <h2 class="recipe-title">${recipe.name}</h2>

      ${ratingTemplate(recipe.rating)}

      <p>${recipe.description}</p>

    </div>
  `;
}

/* ---------- RENDER ---------- */

function renderRecipes(recipeList) {
  const display = document.querySelector("#recipeDisplay");

  const recipesHTML = recipeList
    .map((recipe) => recipeTemplate(recipe))
    .join("");

  display.innerHTML = recipesHTML;
}

/* ---------- FILTER ---------- */

function filterRecipes(query) {
  const filtered = recipes.filter((recipe) => {
    const nameMatch = recipe.name.toLowerCase().includes(query);
    const descMatch = recipe.description.toLowerCase().includes(query);

    const tagMatch = recipe.tags.find((tag) =>
      tag.toLowerCase().includes(query)
    );

    const ingredientMatch = recipe.ingredients.find((item) =>
      item.toLowerCase().includes(query)
    );

    return nameMatch || descMatch || tagMatch || ingredientMatch;
  });

  const sorted = filtered.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return sorted;
}

function searchHandler(e) {
  e.preventDefault();

  const searchInput = document.querySelector("#searchInput");
  const query = searchInput.value.toLowerCase();

  const results = filterRecipes(query);
  renderRecipes(results);
}

/* ---------- INIT ---------- */

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", searchHandler);

init();
