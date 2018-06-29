'use strict';

const homeRoute = require('./routes/homeRoute');
const noteRoute = require('./routes/noteRoute');

module.exports = [].concat(homeRoute, noteRoute)