
// criando arquivo de rotas
// importando o express para dentro
const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

// desacoplando o módulo de rotas do expresss em uma nova variável
const routes = express.Router();



// routes.get('/ongs',async(request,response)=>{
//     const ongs = await connection('ongs').select('*');
//     return response.json(ongs);
// });

// routes.post('/ongs', async(request, response) => {
    // const data = request.body; 
    //desestruturação 
    // const {name, email, whatsapp, city, uf} = request.body; 
    // const id = crypto.randomBytes(4).toString('HEX');
    // // console.log(data);

    // await connection('ongs').insert({
    //     id,
    //     name, 
    //     email, 
    //     whatsapp, 
    //     city,
    //     uf
    // })
    // return response.json({ id });
// });

routes.post('/sessions', SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);



//exportando as rotas para utilizar no index.js
module.exports = routes;

