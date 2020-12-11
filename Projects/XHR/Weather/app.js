// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
function getWeather(){
    //Initialised the weather class
    
    const weather = new Weather()
    const ui = new UI()
 

    weather.getWeather().then((
        results
        )=>{ ui.paint(results)}
    ).catch((
        err
        )=>{ console.log( err )
    })
}
