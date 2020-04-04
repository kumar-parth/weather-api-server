require('dotenv').config();
require('./configs/database');
require('./sync/weather');
const express = require('express');
const app = express();
const weatherRoute = require('./routes/weather');
app.use(weatherRoute);
const httpServer = app.listen(process.env.PORT, () => {
    console.log("APP listening on port " + process.env.PORT);
});
module.exports = {
    app,
    httpServer
}