const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        name: 'Jorge',
        email: 'jorgel@cbm.sc.gov.br'
    })
});

app.listen(3333);