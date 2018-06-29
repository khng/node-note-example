'use strict';

const fs = require('fs');
const path = require('path');
const setting = require('../../settings');
const Sequelize = require('sequelize');

const dbSettings = setting[setting.env].db;

const sequelize = new Sequelize(dbSettings.database, dbSettings.user, dbSettings.password, dbSettings);
const db = {};

fs.readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize; // added for convenience if needed in other files ...

module.exports = db;