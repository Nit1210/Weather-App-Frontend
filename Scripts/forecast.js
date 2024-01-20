class Forecast{
    constructor(){
         this.key="c97aff7aede3467a97414532242001";
    }
    
    async  getCityWeather(city) {
        this.URL=`https://api.weatherapi.com/v1/current.json?key=${this.key}&q=${city}&aqi=yes`;
        const response= await fetch(this.URL);
    if (!response.ok) {
        throw new Error(alert(`Enter valid location. Error fetching data for ${city}`));
        
    }
    const responseData=await response.json();
    
    return {citydata: responseData.location , weatherData: responseData.current} ;
};
}



