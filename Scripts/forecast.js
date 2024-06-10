class Forecast{
    constructor(){
         const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;;
    }
    
    async  getCityWeather(city) {
        this.URL=`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`;
        const response= await fetch(this.URL);
    if (!response.ok) {
        throw new Error(alert(`Enter valid location. Error fetching data for ${city}`));
        
    }
    const responseData=await response.json();
    
    return {citydata: responseData.location , weatherData: responseData.current} ;
};
}



