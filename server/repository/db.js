const mongoose = require('mongoose')
require('dotenv').config()
const uri = process.env.db_uri

const options = { useNewUrlParser: true, useUnifiedTopology: true }

const connectDatabase = async () => {
    try {
        mongoose.set('strictQuery', true)
        console.log("Wait for database connection")
        await mongoose.connect(uri, options)
        console.log("MongoDB Atlas connected!")
    } catch (err) {
        console.log(err)
    }
}



module.exports = connectDatabase