/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
// Andrea Grandieri andreagrandieri.github.io                  //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// This is a module. The globalThis export is used.

// Function to switch between light and dark mode
// The function should be called with a button
function themeModeSwitcher() {
  // If theme is dark, switch to light
  // If theme is light, switch to dark
  // Default theme is "light"
  // It implements the continuity of the theme between pages, using sessionStorage

  if (sessionStorage.theme) {
    if (sessionStorage.theme == "light") {
      toggleLightMode()
    } else {
      toggleDarkMode()
    }
  } else {
    sessionStorage.theme = "light"
    toggleLightMode()
  }
}
globalThis.themeModeSwitcher = themeModeSwitcher

function toggleDarkMode() {
  document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>"

  sessionStorage.theme = "dark"
  jtd.setTheme(sessionStorage.theme)
}
globalThis.toggleDarkMode = toggleDarkMode

function toggleLightMode() {
  document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>"

  sessionStorage.theme = "light"
  jtd.setTheme(sessionStorage.theme)
}
globalThis.toggleLightMode = toggleLightMode
