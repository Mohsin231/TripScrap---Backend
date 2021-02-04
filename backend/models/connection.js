// this is the index file that connects to MongoDB

const mongoose = require("mongoose")

const mongoURI = 
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : `mongodb://localhost:27017/express-mvc`

mongoose
    .connect(mongoURI,
        {
            keepAlive: true, 
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        }
        )
    .then( (instance) => 
        console.log(`Connected to db: ${instance.connections[0].name}`)
    )
    .catch( (err) => console.log(`Connection to db failed due to: ${err}`))

mongoose.Promise = Promise // outside ref
// setting mongoose's Promise to use Node's Promise
    
// module.exports = mongoose
module.exports.TripScrap = require("./tripscrap");