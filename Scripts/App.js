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
    console.log(data)
    updateDetails.innerHTML = `
      <h5 class="my-3">${citydata.name}, ${citydata.region}</h5>
      <div class="my-3">${weatherData.condition.text}</div>
      <div class="display-4 my-4">
        <span>${weatherData.temp_f}</span>
        <span>&deg;F</span>
     <div class="feels_like">
        <span>feels like ${weatherData.feelslike_f}</span>
        <span>&deg;F</span>
        </div>`;
        console.log("Updated the "+citydata.Name+" data to html and calling the Icon function");
   const iconUpdate= await UpdateIcon(weatherData.condition.icon);
    if (UI.classList.contains('d-none')) {
        UI.classList.remove('d-none')
    }
    return iconUpdate;
}

//get city weather
const WeatherData = async (city) => {
    const getCityWeatherData = await fetch(`https://weather-app-backend-l8c5.onrender.com/api/weather?city=${city}`);
    if(!getCityWeatherData.ok){
        throw new Error ("Error fetching the data");
    }
    const data=await getCityWeatherData.json();
    console.log("fetched the data of "+city+" from API");
    console.log(data)
    return {citydata:data.citydata,weatherData:data.weatherData };
}

cityForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    //callinmg the function in forecast.js to get weather data
    try {
        const data = await WeatherData(city);
        localStorage.setItem('city',city);
        UpdateUI(data).then(async (day)=>{
        const imageupdate= await UpdateImage(day);
        console.log(imageupdate);
    });
    } catch (err) {  
        console.log(err);
        alert(err);
    }
    //setting local storage
    
});

if(localStorage.getItem('city')){
    WeatherData(localStorage.getItem('city'))
    .then((data)=>UpdateUI(data)
    .then(day=>UpdateImage(day))
    .catch((err)=>{
        console.log();
        alert(err);
    
    }))

}