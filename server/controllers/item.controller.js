const CreateItemService = require('../services/create.item.service.js');
const ReadItemService = require('../services/read.item.service.js');
const UpdateItemService = require('../services/update.item.service.js');


class ItemController {
    async create(req, res) {
        const { body } = req
        const createItemService = new CreateItemService()
        const response = await createItemService.execute(body)
        return res.status(200).json(response)
    }

    async read(req, res) {
        const { params } = req 
        const readItemService = new ReadItemService()
        const response = await readItemService.execute(params)
        return res.status(200).json(response)
    }

    async update(req, res) {
        const { params, body } = req
        const updateItemService = new UpdateItemService()
        const response = await updateItemService.execute(params, body)
        return res.status(200).json(response)
    }
}



module.exports = ItemController