// Initialize the counter variable
let count = 0;

// Select the counter display and the parent container
const value = document.querySelector("#value");
const container = document.querySelector(".button-container");

// Attach a click event listener to the container using an arrow function
container.addEventListener("click", (e) => {
    // Determine the element clicked (targeting the button even if the icon is clicked)
    const targetBtn = e.target.closest(".btn");

    // Only proceed if a button with the class "btn" was clicked
    if (targetBtn && targetBtn.classList.contains("btn")) {
        
        const id = targetBtn.id;

        // if/else if/else chain to determine counter action based on ID
        if (id === "decrease") {
            count--;
        } else if (id === "increase") {
            count++;
        } else {
            count = 0;
        }

        // Update the counter text on screen using .innerText
        value.innerText = count;

        // if/else if/else chain to apply the correct color based on current value
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
    }
});