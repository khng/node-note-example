'use strict';

module.exports = (sequelize, DataTypes) => {
    let Note = sequelize.define('Note', {
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        content: DataTypes.STRING
    });
    return Note;
};