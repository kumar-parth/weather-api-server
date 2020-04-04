exports.up = function (knex, Promise) {
    return knex.schema.createTable('access_tokens', table => {
        table.increments('id').unsigned().primary();
        table.text('access_token').notNull();
        table.string('status');

        table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('access_tokens');
};
