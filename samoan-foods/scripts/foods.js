import { foods } from "./foodData.js";

const foodsGrid = document.getElementById("foodsGrid");
const searchBar = document.getElementById("searchBar");
const filterBtns = document.querySelectorAll(".filter-btn");

// ===============================
// DISPLAY ALL FOODS INITIALLY
// ===============================
function displayFoods(list) {
  foodsGrid.innerHTML = "";
  list.forEach(food => {
    foodsGrid.innerHTML += `
      <div class="food-card">
        <img src="${food.image}" alt="${food.name}">
        <h3>${food.name}</h3>
        <p>${food.category}</p>
        <p>${food.description}</p>
      </div>
    `;
  });
}

displayFoods(foods);

// ===============================
// SEARCH FUNCTION (filter by name)
// ===============================
searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase();
  const filtered = foods.filter(food =>
    food.name.toLowerCase().includes(term)
  );
  displayFoods(filtered);
});

// ===============================
// CATEGORY FILTER BUTTONS
// ===============================
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    if (category === "All") {
      displayFoods(foods);
      return;
    }

    const filtered = foods.filter(food => food.category === category);
    displayFoods(filtered);
  });
});
