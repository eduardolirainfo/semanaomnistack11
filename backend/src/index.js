const express = require('express'); // importando todas as funcionalidade do express dentro da variável
const cors = require('cors');
const routes = require('./routes');
//a variável app para receber nossa aplicação
const app = express(); 

app.use(cors());

//antes de todas as requisições.
//pedindo para o express converter o corpo (json) 
// da requisição em javascript,
//  intendível pela aplicação
app.use(express.json()); 
app.use(routes);

//npm install nodemon -D  // Utilizado somente em desenvolvimento

// Rota / Recurso - Pegando a rota com app.get()

// Métodos HTTP
//
// GET -> buscando informação do back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no Back-end
// DELETE: Excluir uma informação no back-end
//-------------------------------------------

//Tipos de parâmetros
//
// Query Parms: Parametros nomeados enviados na rota após o simbolo de interrogação '?'. Geralmente utilizados em filtros, paginação
// Route Parms: Parametros utilizados para indentificar recursos (único recurso) 
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
//--------------------------------------------------------------------------

// BANCOS DE DADOS
// SQL: NYSQL, ORACLE, PostgreSQL, SQLSERVER
// NoSQL:  MongoDB, CouchDB, etc
//----------------------------------------------


//DRIVER : SELECT * FROM users
//Query Builder: table('users').select('*').where()
//----------------------------------------------

//http://knexjs.org/
//npm install sqlite3


//Resquest - Guarda todos os dados da requisição do usuário
//Response - Responsável por retornar uma resposta para o usuário. 
// app.get('/users', (request, response) => {
// app.post('/users', (request, response) => {
//     // return response.send("Hello World");

//     // const params = request.query; //acessando todos os parametros
//     // const params = request.params; // acessando os Route Parms (pegando algo específico)
//     const body = request.body; // acessando os Route Parms (pegando algo específico)

//     // console.log(params) //:id é o parametro se for query, será nomeado
//     console.log(body);

//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Eduardo Lira'
//     })

// });

// vamos mandar nossa aplicação ouvir a porta 3333
// o erro de acesso "CANNOT GET \ " indica que nenhuma rota foi criada
app.listen(3333);  


//corrigindo instalação do react
//antes
// npm i create-react-app -g
//depois
//npx create-react-app myApp