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
  // It implements the continuity of the theme between pages

  // Tries with localStorage first
  if (typeof (Storage) !== "undefined") {
    // Using "javascript static variable" way of declaration
    if (typeof localStorage.theme === 'undefined') {
      toggleLightMode()
    } else {
      if (localStorage.theme == "light") {
        toggleLightMode()
      } else {
        toggleDarkMode()
      }
    }
  } else {
    // Using "javascript static variable" way of declaration
    if (typeof themeModeSwitcher.theme === 'undefined') {
      toggleLightMode()
    } else {
      if (themeModeSwitcher.theme == "light") {
        toggleLightMode()
      } else {
        toggleDarkMode()
      }
    }
  }
}
globalThis.themeModeSwitcher = themeModeSwitcher

function toggleDarkMode() {
  document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>"

  // Tries with localStorage first
  if (typeof (Storage) !== "undefined") {
    localStorage.theme = "dark"
    jtd.setTheme(localStorage.theme)
  } else {
    toggleDarkMode.theme = "dark"
    jtd.setTheme(toggleDarkMode.theme)
  }
}
globalThis.toggleDarkMode = toggleDarkMode

function toggleLightMode() {
  document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>"

  // Tries with localStorage first
  if (typeof (Storage) !== "undefined") {
    localStorage.theme = "light"
    jtd.setTheme(localStorage.theme)
  } else {
    toggleDarkMode.theme = "light"
    jtd.setTheme(toggleDarkMode.theme)
  }
}
globalThis.toggleLightMode = toggleLightMode
