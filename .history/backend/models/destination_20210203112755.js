const mongoose = require('../db/connection')


const destinationSchema = new mongoose.Schema(
    {
        resultsid: String,
        parent_id: String,
        results_country_id: String,
        images.sizes.medium_url: String,
    })


const destination = mongoose.model('Destination', destinationSchema)

User.createIndexes();

module.exports = destination
