import "./style.css";
import { fetchWeather } from "./api.js";
import { processWeatherData } from "./weather.js";
import { showLoading, hideLoading, displayWeather } from "./ui.js";

const form = document.getElementById("search-form");
const locationInput = document.getElementById("location-input");
const unitToggle = document.getElementById("unit-toggle");

let currentWeatherData = null;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const location = locationInput.value.trim();
  
  if (!location) return;
  
  showLoading();
  
  try {
    const rawData = await fetchWeather(location);
    currentWeatherData = processWeatherData(rawData);
    displayWeather(currentWeatherData, unitToggle.checked);
  } catch (error) {
    alert("Failed to fetch weather data. Please try again.");
    hideLoading();
  }
});

unitToggle.addEventListener("change", () => {
  if (currentWeatherData) {
    displayWeather(currentWeatherData, unitToggle.checked);
  }
});
