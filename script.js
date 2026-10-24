const apiKey = "2eda69cc472291a0395045962d69ec50"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.getElementById("weather-icon"); 

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.getElementById("error-message").style.display = "block";
        document.getElementById("weather-info").style.display = "none";
    } else {
        const data = await response.json();
        
        // Hide the welcome message when data is found!
        document.getElementById("welcome-message").style.display = "none";
        
        document.getElementById("city-name").innerText = data.name; 
        document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";
        document.getElementById("weather-description").innerText = data.weather[0].description;
        
        const condition = data.weather[0].main;
        
        // --- REAL PHOTOGRAPHY BACKGROUNDS ---
        if (condition === "Clouds") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1513407030348-c6f423eeb40e?q=80&w=1920&auto=format&fit=crop')";
            weatherIcon.src = "https://openweathermap.org/img/wn/04d@2x.png"; // Official API Icon
        } 
        else if (condition === "Clear") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1920&auto=format&fit=crop')";
            weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png"; 
        } 
        else if (condition === "Rain" || condition === "Drizzle") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1920&auto=format&fit=crop')";
            weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png"; 
        } 
        else if (condition === "Thunderstorm") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1605727216801-e27ce1d0ce49?q=80&w=1920&auto=format&fit=crop')";
            weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png"; 
        } 
        else if (condition === "Snow") {
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=1920&auto=format&fit=crop')";
            weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png"; 
        }

        // Make the background cover the whole screen smoothly
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";

        document.getElementById("error-message").style.display = "none";
        document.getElementById("weather-info").style.display = "block";
    }
}

searchBtn.addEventListener("click", function() {
    const cityTyped = searchBox.value;
    checkWeather(cityTyped);
});