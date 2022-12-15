// Function to switch between light and dark mode
// The function should be called with a button
function toggleDarkMode() {
    // If theme is dark, switch to light
    // If theme is light, switch to dark
    // Default theme is "light"
    var theme = "light"
  
    if (theme == "light") {
      theme = "dark"
    } else {
      theme = "light"
    }
  
    jtd.setTheme(theme)
}
