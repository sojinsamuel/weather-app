let weather = {
    "apikey": "Your API Key",
    fetchWeather: function (){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=76c28839ec6cbca0287b0e124c3dc6f1")
    }
        .then((response) => response.json())
        .then((data) => console.log(data))
}
