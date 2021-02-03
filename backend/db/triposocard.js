const mongoose = require('./connection');

const Destination = require('../models/destination');
const User = require('../models/user');
const bookmarkseeds = require('./seeds.json');

Bookmark.deleteMany({})
  .then(() => User.deleteMany({}))
  .then(() => {
    return User.create({ email: 'fake@email.com', name: 'Fake Person' })
      .then((user) =>
        bookmarkseeds.map((bookmark) => ({ ...bookmark, owner: user._id }))
      )
      .then((bookmarks) => Bookmark.insertMany(bookmarks));
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
