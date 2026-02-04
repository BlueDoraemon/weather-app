const display = document.getElementById("weather-display");
const loading = document.getElementById("loading");

function showLoading() {
  loading.classList.remove("hidden");
}

function hideLoading() {
  loading.classList.add("hidden");
}

function displayWeather(weatherData, useCelsius = false) {
  hideLoading();
  
  const temp = useCelsius 
    ? fahrenheitToCelsius(weatherData.temperature)
    : weatherData.temperature;
  
  const unit = useCelsius ? "°C" : "°F";
  
  display.innerHTML = `
    <h2>${weatherData.location}</h2>
    <div class="weather-card">
      <p class="temperature">${temp.toFixed(1)}${unit}</p>
      <p class="conditions">${weatherData.conditions}</p>
      <p>${weatherData.description}</p>
      <p>Feels like: ${useCelsius 
        ? fahrenheitToCelsius(weatherData.feelsLike).toFixed(1) 
        : weatherData.feelsLike}${unit}</p>
      <p>Humidity: ${weatherData.humidity}%</p>
      <p>Wind: ${weatherData.windSpeed} mph</p>
    </div>
  `;
  
  // Update background based on weather conditions
  updateBackground(weatherData.conditions);
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

function updateBackground(conditions) {
  const body = document.body;
  // Change background color or image based on conditions
  if (conditions.toLowerCase().includes("rain")) {
    body.style.backgroundColor = "#4a5568";
  } else if (conditions.toLowerCase().includes("sun")) {
    body.style.backgroundColor = "#f6e05e";
  } else {
    body.style.backgroundColor = "#63b3ed";
  }
}

export { showLoading, hideLoading, displayWeather };
