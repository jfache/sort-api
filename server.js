const http = require('http');
const express = require('express');
const swaggerize = require('swaggerize-express');
const bodyParser = require('body-parser');

const PORT = 4001;

const app = express();

const server = http.createServer(app);

app.use(bodyParser.json());

app.use(
    swaggerize({
        api: './swagger/swagger.yaml',
        docspath: '/apidocs',
        handlers: './handlers'
    })
);

app.use('/*', (err, req, res, next) => {
    res.status(err.status).json(err);
});

server.listen(PORT, 'localhost', () => {
    const host = server.address().address + ':' + server.address().port;
    app.swagger.api.host = host;
    console.log(`App running on ${host}`);
});
