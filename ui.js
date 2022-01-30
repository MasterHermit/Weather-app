class UI{
    constructor(){
        this.location=document.getElementById("w-location");
        this.desc=document.getElementById("w-desc");
        this.string=document.getElementById("w-string");
        this.icon=document.getElementById("w-icon");
        this.humidity=document.getElementById("w-humidity");
        this.feelsLike=document.getElementById("w-feels-like");
        
        this.wind=document.getElementById("w-wind");
    

    }
    load(weather){
        this.location.textContent=weather.name;
        this.desc.textContent=weather.weather[0].description;;
        this.string.textContent=weather.main.temp;
        this.icon.setAttribute('src',"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
        this.humidity.textContent=`Humidity ${weather.main.humidity} %`;
        this.feelsLike.textContent=`Feels Like ${weather.main.feels_like} c`;
        this.wind.textContent=`Wind Speed ${weather.wind.speed} Mph`;


    }
}