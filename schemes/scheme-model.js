const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

const find = () => db('schemes').select('*')

const findById = async id => {
    const found = await  db('schemes').select('*').where({ id })

    if (found.length === 0) {
        return null
    }

    return found
}

module.exports = {
    find,
    findById
}