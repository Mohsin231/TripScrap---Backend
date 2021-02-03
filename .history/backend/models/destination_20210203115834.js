const mongoose = require('../db/connection')

//when user enters 
const destinationSchema = new mongoose.Schema(
    {
        stateName: String, 
        cityName: String 
      
    })


const destination = mongoose.model('Destination', destinationSchema)

User.createIndexes();

module.exports = destination
