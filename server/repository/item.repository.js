class ItemRepository {

    find(data) {        
        const itemModel = require("./itemModel.js")        
        return itemModel.find(data)
    }

    create(data) {
        const itemModel = require("./itemModel.js")
        return itemModel.create(data)
    }

    findAndUpdate(filter, update) {
        const itemModel = require("./itemModel.js")
        return itemModel.findOneAndUpdate(filter, update)
    }

    findOne(data) {        
        const itemModel = require("./itemModel.js")        
        return itemModel.findOne(data)
    }
}

module.exports = ItemRepository