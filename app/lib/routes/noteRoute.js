'use strict';

const note = require('../controllers/note');

module.exports = [
    {
        method: 'POST',
        path: '/note',
        handler: note.create,
        config: {
            description: 'Add a new note'
        }
    },
    {
        method: 'GET',
        path: '/note/{id}',
        handler: note.read,
        config: {
            description: 'Gets the content of a note'
        }
    },
    {
        method: 'PUT',
        path: '/note/{id}',
        handler: note.update,
        config: {
            description: 'Updates the selected note'
        }
    },
    {
        method: 'DELETE',
        path: '/note/{id}',
        handler: note.delete,
        config: {
            description: 'Deletes the selected note'
        }
    }
];