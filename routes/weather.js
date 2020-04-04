const router = require('express').Router();
const validateRequest = require('../middleware/validateRequest');
const WeatherController = require('../controllers/WeatherController');

router.get("/api/weather", validateRequest, async (req, res) => {
    console.log('/api/weather');
    let weatherController = new WeatherController(req, res);
    let result = await weatherController.getWeatherByDateTime();
    return res.status(200).send({
        success: true,
        data: result
    });
});


module.exports = router;