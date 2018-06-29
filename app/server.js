'use strict';

const Hapi = require('hapi');
const hoek = require('hoek');

const settings = require('./settings');
const routes = require('./lib/routesManager');
const models = require('./lib/models/')

const server = new Hapi.Server({port: settings.port});

server.route(routes);

models.sequelize.sync().then(() => {
    server.start((err) => {
        hoek.assert(!err, err);
        console.log(`Server running at: ${server.info.uri}`);
    })
})
