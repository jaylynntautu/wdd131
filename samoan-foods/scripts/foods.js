import { foods } from "./foodData.js";

const foodsGrid = document.getElementById("foodsGrid");
const searchBar = document.getElementById("searchBar");
const filterBtns = document.querySelectorAll(".filter-btn");

// Render food cards
function displayFoods(list) {
  foodsGrid.innerHTML = "";
  list.forEach(food => {
    foodsGrid.innerHTML += `
      <div class="food-card">
        <img src="${food.image}" alt="${food.name}" loading="lazy">
        <h3>${food.name}</h3>
        <p>${food.category}</p>
        <p>${food.description}</p>
      </div>
    `;
  });
}

// show all initially
displayFoods(foods);

// Search by name
searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase();
  const filtered = foods.filter(food =>
    food.name.toLowerCase().includes(term)
  );
  displayFoods(filtered);
});

// Filter by category
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    if (category === "All") {
      displayFoods(foods);
    } else {
      const filtered = foods.filter(food => food.category === category);
      displayFoods(filtered);
    }
  });
});
