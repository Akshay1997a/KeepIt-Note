const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true, trim: false},
    date: {type: Date, required: true}
})

module.exports = mongoose.model('expence', exerciseSchema)