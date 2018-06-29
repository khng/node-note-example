'use strict';

const home = require('../controllers/home');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: home,
        config: {
            description: 'Gets all the notes available'
        }
    }
]