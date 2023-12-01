class Forecast{
    constructor(){
     
    }
    async  getCityWeather(city) {
        this.URL=`https://api.weatherapi.com/v1/current.json?key=f71743e7572745e0a1b223132232311&q=${city}&aqi=yes`;
        const response= await fetch(this.URL);
    if (!response.ok) {
        throw new Error(alert(`Enter valid location. Error fetching data for ${city}`));
        
    }
    const responseData=await response.json();
    
    return {citydata: responseData.location , weatherData: responseData.current} ;
};
}



