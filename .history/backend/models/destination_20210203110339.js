const mongoose = require('../db/connection')


const destinationSchema = new mongoose.Schema(
    {
        stateName: String, 
        cityName: String 
      
    })


const destination = mongoose.model('Destination', destinationSchema)

User.createIndexes();

module.exports = destination
