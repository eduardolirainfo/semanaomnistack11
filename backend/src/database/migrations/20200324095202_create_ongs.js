
//método up, responsável pela criação, o que vai acontecer quando 
//executarmos a migrations
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};

//metódo down, responsável por deletar a tabela em caso de problemas
exports.down = function(knex) {
   return knex.schema.dropTable('ongs');
  
};
