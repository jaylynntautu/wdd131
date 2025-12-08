import { foods } from "./foodData.js";

// ========== FEATURED FOODS (first 3) ==========
const featuredGrid = document.getElementById("featuredGrid");

foods.slice(0, 3).forEach(food => {
  featuredGrid.innerHTML += `
    <div class="food-card">
      <img src="${food.image}" alt="${food.name}" loading="lazy">
      <h3>${food.name}</h3>
      <p>${food.category}</p>
    </div>
  `;
});

// ========== RANDOM FOOD GENERATOR ==========
const randomBtn = document.getElementById("randomFoodBtn");
const randomDisplay = document.getElementById("randomFoodDisplay");

randomBtn.addEventListener("click", () => {
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  randomDisplay.classList.remove("hidden");

  randomDisplay.innerHTML = `
    <img src="${randomFood.image}" alt="${randomFood.name}" loading="lazy">
    <h3>${randomFood.name}</h3>
    <p>${randomFood.category}</p>
    <p>${randomFood.description}</p>
  `;
});
