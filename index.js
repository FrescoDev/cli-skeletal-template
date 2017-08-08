process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-core/register');
require('babel-polyfill');

process.env.NODE_ENV == 'development' ? module.exports = require('./src/') : module.exports = require('./build/');