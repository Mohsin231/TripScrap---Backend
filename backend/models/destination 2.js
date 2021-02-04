const mongoose = require('../db/connection')

//when user enters destination into input field that asks "Where are you going?"


const destinationSchema = new mongoose.Schema(
    {
        results_id: String,
        parent_id: String,
        results_country_id: String,
        images_caption: String,
        images_sizes_medium_url: String,
    })


const destination = mongoose.model('Destination', destinationSchema)

// User.createIndexes();

module.exports = destination
