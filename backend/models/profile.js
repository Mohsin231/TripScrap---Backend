const mongoose = require('./connection')
const uniqueValidator = require('mongoose-unique-validator'); 
const crypto = require('crypto');

const UserSchema = new mongoose.Schema(
    {
        username: {type: String,
            required: true, 
            index: true,
            unique: true},
        email: String,
        bio: String,
        image: String,
        hash: String,
        salt: String,
        save: Array,
      }, {timestamps: true});

//salt and hash protect your password 
const User = mongoose.model('User', UserSchema)

User.createIndexes();

module.exports = User