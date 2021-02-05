const mongoose = require('./connection')


const destinationSchema = new mongoose.Schema(
    {
        results: [
            {
            id: String,
            parent_id: String,
            coordinates: {
                latitude: Number,
                longitude: Number
            },
            country_id: String,
            type: String,
            images: [{
                source_id: String,
                source_url: String,
                caption: String,
                sizes: {
                    original: {},
                    medium: {
                        url: String,
                        width: Number,
                        height: Number,
                        bytes: Number,
                        format: String
                    },
                    thumbnail: {
                        url: String,
                        width: Number,
                        height: Number,
                        bytes: Number,
                        format: String
                    }
                }
            }],
            
        }
    ]//end of array
    },
    { typeKey: '$type' }

    )


const Destination = mongoose.model('Destination', destinationSchema)

// User.createIndexes();

module.exports = Destination
