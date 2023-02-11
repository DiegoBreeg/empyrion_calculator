const ItemRepository = require("../repository/item.repository")

class UpdateItemService {
    async execute(params, body) {
        const itemRepository = new ItemRepository()
        const item = await itemRepository.findAndUpdate(params, body)
        if(item === null)
            return {message: "item not found"}
        return item
    }
}

module.exports = UpdateItemService