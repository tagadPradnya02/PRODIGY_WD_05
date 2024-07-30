const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        alert('Please enter a location');
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error('Location not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    const weatherInfo = `
        <div class="weather-info">
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        </div>
    `;
    weatherContainer.innerHTML = weatherInfo;
}
