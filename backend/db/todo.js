const todoData = require('./todo.json')
const Todo = require('../models/tripscrap')
// const User = require('./models/profile');


Todo.deleteMany({})
.then( () => {
    return Todo.insertMany(todoData)
})
.then(console.log)
.catch(console.error)
.finally(() => {process.exit()})



// const Bookmark = require('../models/bookmark');
// const User = require('../models/user');
// const bookmarkseeds = require('./seeds.json');

// Bookmark.deleteMany({})
//   .then(() => User.deleteMany({}))
//   .then(() => {
//     return User.create({ email: 'fake@email.com', name: 'Fake Person' })
//       .then((user) =>
//         bookmarkseeds.map((bookmark) => ({ ...bookmark, owner: user._id }))
//       )
//       .then((bookmarks) => Bookmark.insertMany(bookmarks));
//   })
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => {
//     process.exit();
//   });







// Todo.create(todoData, (error, data)=>{
//     if (error){
//         console.log(error);
        
//     }else{
//         console.log(data);
//     }
// })