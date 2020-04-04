const Model = require('objection').Model;

class Weather extends Model {
    static get tableName() {
        return 'weather';
    }

    static async insertWeatherData(weatherData) {
        await Weather.query().insert(weatherData);
    }

    static async getWeatherByDateTime() {
        let result = await Weather.query().orderBy('created_at');
        return result;
    }
}

module.exports = Weather;