const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
        unique: true
    },
    output_count: {
        type: String,
        required: true
    },
    input_items: {
        type: Array
    }
})

const itemModel = mongoose.model("item", itemSchema)

module.exports = itemModel