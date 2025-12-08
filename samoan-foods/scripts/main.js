import { foods } from "./foodData.js";

const randomBtn = document.getElementById("randomFoodBtn");
const randomDisplay = document.getElementById("randomFoodDisplay");

// Random Food Generator
randomBtn.addEventListener("click", () => {
  const random = foods[Math.floor(Math.random() * foods.length)];

  randomDisplay.classList.remove("hidden");
  randomDisplay.innerHTML = `
    <img src="${random.image}?v=2" alt="${random.name}" loading="lazy">
    <h3>${random.name}</h3>
    <p>${random.category}</p>
    <p>${random.description}</p>
  `;
});
