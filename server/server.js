const express = require('express')
const router = require('./routes.js')
const connectDatabase = require('./repository/db.js');
const app = express()

async function Main() {

    await connectDatabase()
    app.use(express.json())
    app.use(express.static('public'))
    app.use(router)
    app.listen("3000", () => console.log("server online"))
}

Main()