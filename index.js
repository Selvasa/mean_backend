const express = require('express');
const mongoose = require("mongoose");
const bodyparser=require('body-parser')
const app = express(); 
const createCrud = require('./routes/crud');

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017', { dbName: "my_admin" });
    console.log('db connected successfully');
}

connectDB().catch((err) => {
    console.log(err)
})

app.use(bodyparser.json())
app.use('/', createCrud);

app.listen(3000, () => {
    console.log('backend run port 3000')
});