
exports.up = function (knex) {
    return knex.schema.createTable('weather', table => {
        table.increments('id').unsigned().primary();
        table.string('min_temp');
        table.string('max_temp');
        table.string('current_temp');

        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('weather');
};
