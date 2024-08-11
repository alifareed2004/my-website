/* Initialize variables */
let current_mode = localStorage.getItem("current_mode");
const dark_mode_button = document.getElementById("dark_mode_button");

/* Enable Dark Mode Function */
const enableDarkMode = () => {
    document.body.classList.add("dark_mode");
    localStorage.setItem("current_mode", "active");
}

/* Disable Dark Mode Function */
const disableDarkMode = () => {
    document.body.classList.remove("dark_mode")
    localStorage.setItem("current_mode", null);
}

/* If dark mode is already active, enable it */
if (current_mode === "active") enableDarkMode();

/* Checks if the dark mode button is pressed and executes the appropriate function */
dark_mode_button.addEventListener("click", () => {
    current_mode = localStorage.getItem("current_mode");
    if (current_mode !== "active") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

/* OLD DARK MODE FUNCTION */
/*function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("dark_mode");
 }*/