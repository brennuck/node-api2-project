const express = require('express');

const router = require('../router/router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>BRENNON'S PROJECT</h1>`);
});

server.use('/api/posts', router)

module.exports = server;