/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//                                                             //
//                                                             //
// Andrea Grandieri andreagrandieri.github.io                  //
//                                                             //
//                                                             //
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// Function to switch between light and dark mode
// The function should be called with a button
window.onload = function toggleDarkMode() {
    // If theme is dark, switch to light
    // If theme is light, switch to dark
    // Default theme is "light"

    // Using "javascript static variable" way of declaration
    if (typeof toggleDarkMode.theme === 'undefined') {
      toggleDarkMode.theme = "light"
    }

    if (toggleDarkMode.theme == "light") {
      // Change button with id "lighdarkSwitcherButton" text
      document.getElementById("lightdarkSwitcherButton").innerHTML = "Toggle Light Mode"
      toggleDarkMode.theme = "dark"
    } else {
      document.getElementById("lightdarkSwitcherButton").innerHTML = "Toggle Dark Mode"
      toggleDarkMode.theme = "light"
    }

    jtd.setTheme(toggleDarkMode.theme)
}
