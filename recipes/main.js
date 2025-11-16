import recipes from "./recipes.mjs";

function showRecipe(recipe) {
  const display = document.querySelector("#recipeDisplay");

  display.innerHTML = `
    <div>
      <h2>${recipe.name}</h2>
      <img src="images/${recipe.image}" alt="${recipe.name}">
      <div>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
        </span>
      </div>
    </div>

    <p class="description">${recipe.description}</p>
  `;
}

// Show the first recipe on page load
showRecipe(recipes[0]);
