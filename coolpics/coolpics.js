// CoolPics JS - WDD 131
// Author: Jaylynn Tautu

// 1. Menu toggle functionality
const menuButton = document.querySelector(".menu");
const menu = document.querySelector("header nav");

function toggleMenu() {
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// 2. Handle window resize to show/hide menu
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize(); // call on page load
window.addEventListener("resize", handleResize);

// 3. Image viewer (modal)
const gallery = document.querySelector(".gallery");

function viewerTemplate(imgSrc, imgAlt) {
  return `
    <img src="${imgSrc}" alt="${imgAlt}">
    <button class="close-viewer">X</button>
  `;
}

gallery.addEventListener("click", (event) => {
  const clickedImg = event.target.closest("img");
  if (!clickedImg) return;

  // Generate full-size image URL
  const fullSrc = clickedImg.src.split("-")[0] + "-full.jpeg";

  // Create dialog element
  const modal = document.createElement("dialog");
  modal.id = "image-viewer";
  modal.innerHTML = viewerTemplate(fullSrc, clickedImg.alt);

  document.body.appendChild(modal);
  modal.showModal();

  // Close button
  const closeButton = modal.querySelector(".close-viewer");
  closeButton.addEventListener("click", () => modal.close());

  // Click outside image closes modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });

  // Remove modal from DOM when closed
  modal.addEventListener("close", () => modal.remove());
});
