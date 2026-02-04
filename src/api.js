
// using env instead
const API_KEY = process.env.API_KEY;

const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";

async function fetchWeather(location) {
  try {
    const response = await fetch(
      `${BASE_URL}/${location}?key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(`Weather data not found for ${location}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}

export { fetchWeather };
