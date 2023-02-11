const ItemRepository = require("../repository/item.repository");

class ReadItemService {

    async execute(data) {
        const itemRepository = new ItemRepository()
        const item = await itemRepository.find(data)
        if(item.length == 0) {            
            return {message: "item not found"}
        }
        return item
    }
}


module.exports = ReadItemService