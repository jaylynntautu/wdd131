import recipes from "./recipes.mjs";

function showRecipe(recipe) {
  const display = document.querySelector("#recipeDisplay");

  display.innerHTML = `
    <img src="images/${recipe.image}" alt="${recipe.name}">

    <div class="recipe-info">
      <span class="tag">dessert</span>

      <h2 class="recipe-title">${recipe.name}</h2>

      <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
        ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
      </span>

      <p>${recipe.description}</p>
    </div>
  `;
}

showRecipe(recipes[0]);
