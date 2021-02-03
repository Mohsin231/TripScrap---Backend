const mongoose = require('../db/connection')


const destinationSchema = new mongoose.Schema(
    {
        id: String,
        parent_id: String,
        images_sizes_thumbnail: String,
    })


const destination = mongoose.model('Destination', destinationSchema)

User.createIndexes();

module.exports = destination