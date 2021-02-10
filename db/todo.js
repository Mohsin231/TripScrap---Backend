const todoData = require('./todo.json')
const Todo = require('../models/tripscrap')


Todo.deleteMany({})
.then( () => {
    return Todo.insertMany(todoData)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})