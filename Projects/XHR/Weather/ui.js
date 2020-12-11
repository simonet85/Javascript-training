class UI {
    constructor() {
    //   this.location = document.getElementById('w-location');
      this.temperature = document.getElementById('w-desc');
      this.summary = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.dewpoint= document.getElementById('w-dewpoint');
      this.windSpeed = document.getElementById('w-wind');
    }
  
    paint(weather) {
    //   this.location.textContent = weather.display_location.full;
      this.temperature.textContent = weather.temperature;
      this.summary.textContent = weather.summary;
      this.icon.setAttribute('src', weather.icon);
      this.humidity.textContent = `Relative Humidity: ${weather.humidity}`;
      this.dewpoint.textContent = `DewPoint: ${weather.dewpoint}`;
      this.windSpeed.textContent = `Wind: ${weather.windSpeed}`;
    }
  }