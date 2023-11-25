const cityForm = document.querySelector('form');
const UI = document.querySelector('.card');
const weatherImage = document.querySelector('.time');
const updateDetails = document.querySelector(".details");
const weatherIcon = document.querySelector(".icon img");
//update UI
//update weather image

UpdateImage=  (day)=>{
     weatherImage.setAttribute('src',day);
    let status="Image is updated";
    return status;
}
//update weather Icon
UpdateIcon = async (icon) => {
    icon = "https:" + icon;
   await weatherIcon.setAttribute('src', icon);
    let day=icon;
    day= day.includes('day') ? day='images/day_img.png': day='images/night_img.png';
    console.log("icon is updated and calling image function");
   return day;

}
//update Weather data
const UpdateUI =  async (data) => {
    const { citydata, weatherData } = data;
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
        console.log("updated the data to html and calling the Icon function");
   const iconUpdate= await UpdateIcon(weatherData.condition.icon);
    if (UI.classList.contains('d-none')) {
        UI.classList.remove('d-none')
    }
    return iconUpdate;
}

//get city weather
const WeatherData = async (city) => {
    const getCityWeatherData = await getCityWeather(city);
    console.log("fetched the data from API");
    return getCityWeatherData;
}

cityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //callinmg the function in forecast.js to get weather data
    try {
        const data = await WeatherData(city);
        UpdateUI(data).then(async (day)=>{
        const imageupdate= await UpdateImage(day);
        console.log(imageupdate);
    });
    } catch (err) {
        console.log(err);
    }
});

