// 1. Select the dropdown element
const themeSelector = document.querySelector('#theme-selector');

// 2. Create the function to change the theme
function changeTheme() {
  const body = document.body;
  const logo = document.querySelector('#logo');

  // Check the selected value
  if (themeSelector.value === 'dark') {
    // Dark theme selected
    body.classList.add('dark'); 
    logo.src = 'byuilogo_white.png'; // white logo for dark theme
  } else {
    // Light theme selected
    body.classList.remove('dark'); 
    logo.src = 'byuilogo.webp';     // blue logo for light theme
  }
}

// 3. Add event listener to dropdown
themeSelector.addEventListener('change', changeTheme);
