const mongoose = require('mongoose');   

new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    slug: {type: String,
    required: true,
    unique: true,
    },
    description:{
        type: String,
        required: false,
    }

},{timesstamps: true });  

module.exports = mongoose.model('Category', categorySchema);