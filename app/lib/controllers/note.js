'use strict';

const models = require('../models/');

module.exports = {
    create: (request, response) => {
        return models.Note
            .create({
                title: request.payload.title,
                description: request.payload.description,
                content: request.payload.content
            })
            .then((response) => {
                //generate a view later
                return (response)
            });
    },
    read: (request, response) => {
        return models.Note
            .findOne({
                where: {
                    id: request.params.id
                }
            })
            .then((response) => {
                return (response)
            })
    },
    update: (request, response) => {
        const values = {
            title: request.payload.title,
            description: request.payload.description,
            content: request.payload.content
        };

        const options = {
            where: {
                id: request.params.id
            }
        };

        return models.Note
            .update(values, options)
            .then(() => {
                return models.Note
                    .findOne(options)
                    .then((result) => {
                        return (result);
                    });
            });
    },
    delete: (request, response) => {
        return models.Note
            .destroy({
                where: {
                    id: request.params.id
                }
            })
    }
};