
const Todo = require('../models/tripscrap')

const todoData = require('./todo.json')

Todo.deleteMany({})
.then( () => {
    return Todo.insertMany(todoData)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})