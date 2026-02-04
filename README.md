# Weather App

A weather forecast app that shows real-time conditions for any city. Built with JavaScript and bundled with Webpack. 
<img width="601" height="441" alt="SCR-20260204-luhb" src="https://github.com/user-attachments/assets/f51d55dd-6857-4853-8b36-53abdbf078f0" />

## What It Does

- Search for weather by city name
- Toggle between Fahrenheit and Celsius
- Dynamic background changes based on conditions (sunny = yellow, rainy = gray)
- Shows temperature, conditions, humidity, and wind speed

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install 
```

### 2. Get Your Free API Key
You need a weather API key to fetch data. Here's how:

Option A: Visual Crossing (recommended)

Go to visualcrossing.com/weather-api

Create a free account

Copy your API key from the dashboard

## Option B: WeatherAPI

Go to weatherapi.com

Sign up for free

Grab your API key from your account

### 3. Set Up Environment Variables
Create a .env file in your project root:

bash
touch .env
Add your API key to it:

bash
API_KEY=your_actual_api_key_here
Make sure Git ignores this file (don't commit your key):

bash
echo ".env" >> .gitignore
### 4. Install dotenv-webpack
This lets Webpack read your .env file:

bash
npm install --save-dev dotenv-webpack
Update your webpack.config.js:

javascript
import Dotenv from "dotenv-webpack";

export default {
  // ... your existing config
  plugins: [
    new Dotenv(),  // Add this line
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
### 5. Use the API Key in Your Code
In src/api.js, access the key like this:

javascript
const API_KEY = process.env.API_KEY;

async function fetchWeather(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`
  );
  return response.json();
}
### 6. Run the App
bash
npm start
Open http://localhost:8080 in your browser.

Build for Production
bash
npm run build
This creates a dist/ folder with your bundled files.

Project Structure
text
weather-app/
├── src/
│   ├── api.js          # Fetches data from the weather API
│   ├── ui.js           # Updates the DOM (what users see)
│   ├── weather.js      # Processes raw API data into usable format
│   ├── index.js        # Main entry point - ties everything together
│   ├── style.css       # Styling
│   └── template.html   # HTML template
├── webpack.config.js   # Webpack setup
├── package.json        # Dependencies and scripts
└── .env                # Your secret API key (not tracked by git)
How It Works
User enters a city → form submission triggers fetchWeather()

API call is made → api.js fetches data using your key from .env

Data is processed → weather.js extracts the info we need

UI updates → ui.js displays temperature, conditions, etc.

Background changes → based on the weather condition string

Why the .env File?
Never hardcode API keys in your JavaScript. If you push that to GitHub, anyone can steal and abuse your key. The .env file keeps secrets local, and dotenv-webpack injects them at build time.

Common Issues
Problem	Fix
process.env.API_KEY is undefined	Restart the dev server after creating .env
Module not found: dotenv-webpack	Run npm install --save-dev dotenv-webpack
API calls fail / 401 error	Double-check your API key is correct and active
.env was committed to Git	Remove it with git rm --cached .env, add to .gitignore, commit again
Deployment Notes
GitHub Pages: Doesn't support server-side env variables. Options:

Switch to a no-key API like Open-Meteo

Or use a placeholder/demo key for showcase purposes

Netlify/Vercel:

Add API_KEY in their dashboard under Environment Variables

Keep .env in .gitignore - they'll inject variables during build

Tech Stack
JavaScript (ES6+) - Modern syntax, async/await

Webpack 5 - Bundles modules, handles dev server

Visual Crossing API - Free weather data (1000 calls/day)

CSS3 - Flexbox, smooth transitions

What I Learned
How to use fetch() with async/await

Keeping API keys secure with environment variables

Modular JavaScript organization (separate files for API, UI, logic)

Webpack configuration for modern JS projects
