const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    address: String,
    phone: Number,
})

module.exports = mongoose.model('users', crudSchema);