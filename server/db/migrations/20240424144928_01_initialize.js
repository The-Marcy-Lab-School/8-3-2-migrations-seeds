/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.timestamps(true, true);
    })
    .createTable('todos', function (table) {
      table.increments('id').primary();
      table.integer('user_id').notNullable();
      table.string('task').notNullable();
      table.boolean('is_done').notNullable();
      table.boolean('is_urgent').notNullable();
      table.timestamps(true, true);

      table.foreign('user_id').references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('todos').dropTable('users')
};
