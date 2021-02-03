//todo
//grab what is being exported which is the mongoose connection inside connections.js
const mongoose =require('../db/connection')
const Destination = require('./destination')
//next build up your Schema! 

const TripScrapSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true, 
        },
        complete: {
            type: Boolean, 
            default: false, 
            //if you don't enter a value for complete, it will just enter in false. 
        },
        destination: {type: String, ref: Destination}
    },
    {timestamps: true} 
    //when you enter something into a database a timestamp is created to track the updates
)
//model asks for a name and a schema (in parenthesis)(name, schema)
const TripScrap = mongoose.model('TripScrap', TripScrapSchema)

module.exports = TripScrap