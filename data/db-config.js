const knex = require('knex');
const configs = require('../knexfile.js');
const environment = process.env.NODE_ENV || 'development';

const config = {
    client: 'sqlite3',
    connection: {
      filename: './data/budget.db3',
    },
    useNullAsDefault: true,
  };

module.exports = knex(config);
