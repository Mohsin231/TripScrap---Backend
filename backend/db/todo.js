
const Todo = require('../models/tripscrap')

const todoData = require('./todo.json')

Todo.deleteMany({})
.then( () => {
    return Todo.insertMany(todoData)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})
// Todo.create(todoData, (error, data)=>{
//     if (error){
//         console.log(error);
        
//     }else{
//         console.log(data);
//     }
// })