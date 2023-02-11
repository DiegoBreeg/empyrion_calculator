const mongoose = require('mongoose')

const uri = "mongodb+srv://diegobreeg:root@empyrioncalculator.sfhbh2q.mongodb.net/?retryWrites=true&w=majority"
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