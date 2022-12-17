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

// Global variables
var theme = "light"

// Function to switch between light and dark mode
// The function should be called with a button
function toggleDarkMode() {
    // If theme is dark, switch to light
    // If theme is light, switch to dark
    // Default theme is "light"

    // // // Using "javascript static variable" way of declaration
    // // if (typeof toggleDarkMode.theme === 'undefined') {
    // //   toggleDarkMode.theme = "light"
    // // }

    // // if (toggleDarkMode.theme == "light") {
    // //   // Change button with id "lighdarkSwitcherButton" text
    // //   document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>"
    // //   toggleDarkMode.theme = "dark"
    // // } else {
    // //   document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>"
    // //   toggleDarkMode.theme = "light"
    // // }

    // // jtd.setTheme(toggleDarkMode.theme)

    if (theme == "light") {
      // Change button with id "lighdarkSwitcherButton" text
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-sun fa-3x\"></i>"
      theme = "dark"
    } else {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "<i class=\"fa-solid fa-moon fa-3x\"></i>"
      theme = "light"
    }

    jtd.setTheme(theme)
}
globalThis.toggleDarkMode = toggleDarkMode
