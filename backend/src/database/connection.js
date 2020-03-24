const Knex = require('knex');
const configuration = require('../../knexfile');

const connection = Knex(configuration.development);


//exporta a conexão com o banco de dados
module.exports = connection;