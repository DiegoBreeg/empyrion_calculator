const ItemRepository = require("../repository/item.repository.js")

class CreateItemService {

    async execute(data) {
        const itemRepository = new ItemRepository()       
        const item = await itemRepository.find({ item_name: data.item_name })
        if (!item.length == 0) {
            return { message: "item already registered" }
        }
        return await itemRepository.create(data)
    }

}
module.exports = CreateItemService