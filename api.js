class Weather {
  constructor(city) {
    this.apiKey = "0df4ab8ba613a42c252483fc1d14d9da";
    this.city = city;
  }
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=${this.apiKey}`
      //console.log(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
    );
    const responseData = await response.json();
    console.log(responseData)
    return {
      data:responseData,
    };
  }
  changeLocation(city) {
    this.city = city;
  }
}
