const ui=new UI();
const storage=new Storage();
const loc=storage.getLocationData();
const weather = new Weather(loc.city);
 

document.addEventListener("DOMContentLoaded", getWeather);
function getWeather(){  
weather.getWeather()
    .then((data) => ui.load(data.data
      ))//ui.load(data))
    .catch((err) => console.log(err));
    }
  


document.getElementById("w-change-btn").addEventListener("click", (e)=>{
    const city=document.getElementById("city").value;
    weather.changeLocation(city);
    storage.setLocationData(city);
getWeather();

    $('#locModal').modal('hide');
})

   