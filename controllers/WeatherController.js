const Weather = require('../models/Weather');

class WeatherController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async getWeatherByDateTime() {
        let weatherData = await Weather.getWeatherByDateTime();
        return weatherData;
    }
}

module.exports = WeatherController;