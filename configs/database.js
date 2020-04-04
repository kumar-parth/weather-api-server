const knex = require('knex');
const knexDb = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "weather_forecast",
        password: process.env.DB_PASSWORD || "weather_forecast",
        database: process.env.DB_NAME || "weather_forecast",
        port: process.env.DB_PORT || 5432
    },
    pool: { min: 0, max: 100 }
});

const { Model } = require('objection');
Model.knex(knexDb);
