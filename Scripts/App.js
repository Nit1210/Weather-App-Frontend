const cityForm = document.querySelector('form');
const UI = document.querySelector('.card');
const weatherImage = document.querySelector('.time');
const updateDetails = document.querySelector(".details");
const weatherIcon = document.querySelector(".icon img");
//update UI
//update weather image

UpdateImage=  (day)=>{
    weatherImage.setAttribute('src',day);
}
//update weather Icon
UpdateIcon = (icon) => {
    icon = "https:" + icon;
    console.log(icon);
    console.log(weatherIcon.setAttribute('src', icon));
    let day=icon;
    day= day.includes('day') ? day='images/day_img.png': day='images/night_img.png';
    console.log(day);
    UpdateImage(day);

}
//update Weather data
const UpdateUI =  (data) => {
    const { citydata, weatherData } = data;
    console.log(citydata);
    console.log(weatherData);
    updateDetails.innerHTML = `
      <h5 class="my-3">${citydata.name}, ${citydata.region}</h5>
      <div class="my-3">${weatherData.condition.text}</div>
      <div class="display-4 my-4">
        <span>${weatherData.temp_c}</span>
        <span>&deg;C</span>
     <div class="feels_like">
        <span>feels like ${weatherData.feelslike_c}</span>
        <span>&deg;C</span>
        </div>`;
   const iconUpdate=  UpdateIcon(weatherData.condition.icon);
    if (UI.classList.contains('d-none')) {
        UI.classList.remove('d-none')
    }

}

//get city weather
const WeatherData = async (city) => {
    const getCityWeatherData = await getCityWeather(city);
    return getCityWeatherData;
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //callinmg the function in forecast.js to get weather data
    WeatherData(city)
        .then(data => UpdateUI(data))
        .catch(err => console.log(err));
});

