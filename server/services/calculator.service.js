const ItemRepository = require("../repository/item.repository")
class CalculatorService {

    async execute({ item_name, amount }) {
        const itemRepository = new ItemRepository()


        const rawResource = []
        const list = {}
        list[item_name] = { item_name, amount }


        async function itemCalculator({ item_name, amount }) {
            const { output_count } = await itemRepository.findOne({ item_name }).select("output_count")
            const { input_items } = await itemRepository.findOne({ item_name }).select("input_items")
            const yields = Math.ceil(amount / output_count)
            delete list[item_name]
            if (input_items.length == 0) {
                rawResource.push({ item_name, yields })
            }

            await input_items.forEach(async ({ item_name, amount }) => {


                list[item_name] = { item_name, amount: Math.ceil(yields * amount) }
            })
            return
        }

        while (Object.keys(list).length) {
            for (const property in list) {
                await itemCalculator(list[property])
            }
        }

        console.log(list)
        console.log(rawResource)        

        const response = rawResource
        return response
    }


}

module.exports = CalculatorService