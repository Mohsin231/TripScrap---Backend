const mongoose = require('../db/connection')

//when user enters destination into input field that asks "Where are you going?"
const destinationSchema = new mongoose.Schema(
    {
        stateName: String, 
        cityName: String 
      
    })


const destination = mongoose.model('Destination', destinationSchema)

User.createIndexes();

module.exports = destination
