const triposoData = require('./destination.json')
const Destination = require('../models/destination')
// const User = require('../models/profile');


Destination.deleteMany({})
.then( () => {
    return Destination.insertMany(triposoData)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})
