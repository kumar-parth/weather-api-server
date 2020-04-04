const axios = require('axios');
const Weather = require('../models/Weather');
const Config = require('../configs/weatherConfig');

formattedWeatherData = (weatherData) => {
    return {
        min_temp: weatherData.tempMin,
        max_temp: weatherData.tempMax,
        current_temp: weatherData.temp
    }
}

async function insertWeatherData() {
    let formatData = formattedWeatherData;
    try {
        setInterval(async () => {
            try {
                let weatherData = await axios.get(Config.url);
                console.log(weatherData.data);
                let formattedWeatherData = formatData(weatherData.data);
                console.log(formattedWeatherData);
                await Weather.insertWeatherData(formattedWeatherData);
            } catch (e) {
                console.log(e);
            }
        }, Config.refreshTime);
    } catch (err) {
        console.log(err);
    }
}

insertWeatherData();