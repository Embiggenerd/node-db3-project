const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

const find = () => db('schemes').select('*')



module.exports = {
    find,

}