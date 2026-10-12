// 1. Get the h1 element from the HTML
const greetingElement = document.querySelector('h1');

// 2. Get the current hour from the user's computer (0 to 23)
const currentHour = new Date().getHours();

// 3. Create a variable to hold our new greeting
let greetingText = "Hello";

// 4. Logic to determine the time of day
if (currentHour >= 5 && currentHour < 12) {
    greetingText = "Good morning";
} else if (currentHour >= 12 && currentHour < 18) {
    greetingText = "Good afternoon";
} else {
    greetingText = "Good evening"; // 6 PM or later
}

// 5. Update the text on the website!
greetingElement.innerText = greetingText + ", I am Hasset!";