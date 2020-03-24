
//método up, responsável pela criação, o que vai acontecer quando 
//executarmos a migrations
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
      table.increments();

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  //metódo down, responsável por deletar a tabela em caso de problemas
  //npx knex migrate:rollback
  exports.down = function(knex) {
     return knex.schema.dropTable('incidents');
  };
  