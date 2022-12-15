// Function to switch between light and dark mode
// The function should be called with a button
function toggleDarkMode() {
    // If theme is dark, switch to light
    // If theme is light, switch to dark
    // Default theme is "light"

    // Using "javascript static variable" way of declaration
    if (typeof toggleDarkMode.theme === 'undefined') {
      toggleDarkMode.theme = "light"
    }

    console.log(toggleDarkMode.theme)

    if (theme == "light") {
      theme = "dark"
    } else {
      theme = "light"
    }

    jtd.setTheme(theme)
}
