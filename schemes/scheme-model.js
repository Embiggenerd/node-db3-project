const knex = require('knex');

const config = require('../knexfile.js');

// we must select the development object from our knexfile
const db = knex(config.development);

const find = () => db('schemes').select('*')

const findById = async id => {
    const found = await db('schemes').select('*').where({ id })

    if (found.length === 0) {
        return null
    }

    return found
}

const findSteps = async id => {
    console.log('findSteps', id)
    try {

        const scheme = await db('schemes').select('scheme_name').where({ id })

        const steps = await db('steps').select('id', 'step_number', 'instructions').where({ scheme_id: id })

        const combined = steps.map(step => ({ ...step, ...scheme[0] }))
        return combined
    } catch (e) {
        console.log(e)
    }
}



module.exports = {
    find,
    findById,
    findSteps
}