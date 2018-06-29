'use strict';

const models = require('../models/');

module.exports = (request, response) => {
    return models.Note
        .findAll({
            // order: [['date', 'DESC']] // ordering date by descending order
        })
        .then((response) => {
            return ({
                data: {
                    notes: response
                },
                page: 'Home—Notes Board',
                description: 'Welcome to my Notes Board'
            });
        });
};