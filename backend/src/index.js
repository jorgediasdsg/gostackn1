const express = require('express');

const app = express();

app.use(express.json());

//  Métodos HTTP
//
// GET: Buscar informações do Backend.
// POST: Criar informação no Backend
// PUT/PATH: Alterar uma informação no backend Put para tudo e path para uma única alteração
// DELETE: Remover uma informação no backend
//
// 3 Tipos de Parâmetros mais utilizados.
// Query Params: Filtros e Paginação
// Route Params: Identificar recursos para atualizar ou deletar 
// Request Body: Conteúdo na hora de criar ou editar o recurso.
//

app.get('/projects', (request, response) => {

    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2'
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;

    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
    ])
});

app.listen(3333, () => {
    console.log('Back-end Started');
});