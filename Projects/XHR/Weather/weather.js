class Weather{
    constructor(){
        this.key = "341bd56f3ba9b0f6b0e77f1fd311664f"
        this.latitude = 42.3601
        this.longitude = -71.0589
    }
//Get weather asynchronously
    async getWeather(){
        const responseWeather = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.key}/${this.latitude},${this.longitude}`)

        const currentWeather =  await responseWeather.json()
        return currentWeather.currently
    }

//Change the location
    changeLocation(latitude, longitude){
        this.latitude = latitude
        this.longitude = longitude
    }
}