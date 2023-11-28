# Weather App

## This is a simple weather application built with HTML, Bootstrap, and JavaScript. The app allows users to check the current weather conditions for a specific city. The project is organized into three main files:

### `App.js`:
#### This file contains the client-side logic for updating the UI based on the weather data fetched from the WeatherAPI. Here's a breakdown of the key functionalities:
#### •	Updating UI Elements:
#### •	The UpdateImage function updates the weather image on the page.
#### •	The UpdateIcon function asynchronously updates the weather icon and calls        UpdateImage.
#### •	The UpdateUI function asynchronously updates various details on the page, including city name, weather condition, temperature, and feels-like temperature. It also calls UpdateIcon.
#### •	Fetching Weather Data:
#### •	The WeatherData function asynchronously fetches weather data for a given city using the WeatherAPI.
#### •	Handling Form Submission:
#### •	The submit event listener on the city form triggers the process of fetching weather data, updating the UI, and storing the city in local storage.
#### •	Local Storage Usage:
#### •	The app checks local storage for a previously selected city and updates the UI accordingly.

### `Forecast.js`
#### This file contains the function getCityWeather responsible for fetching weather data from the WeatherAPI. It takes a city name as a parameter and constructs the API URL to retrieve the current weather conditions.

### `index.html`:
#### This HTML file defines the structure of the weather app, including form input for entering the city and the card that displays weather information. It also includes links to Bootstrap for styling and external JavaScript files for the app logic.


#### Feel free to clone or fork this repository and customize it for your needs. For any issues or improvements, please open an issue or submit a pull request.


