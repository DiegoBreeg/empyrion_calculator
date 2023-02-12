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
                return
            }
            await input_items.forEach(async ({ item_name, amount }) => {
                if (Object.keys(list).includes(item_name)) {
                    list[item_name] = { item_name, amount: Math.ceil(yields * amount) + list[item_name].amount }
                    return
                }
                list[item_name] = { item_name, amount: Math.ceil(yields * amount) }
            })
        }

        while (Object.keys(list).length) {
            for (const property in list) {
                await itemCalculator(list[property])
            }
        }

        const rawResourceSum = {}
        await rawResource.forEach(async element => {
            if (rawResourceSum[element.item_name]) {
                rawResourceSum[element.item_name] += element.yields
                return
            }
            rawResourceSum[element.item_name] = element.yields
        })

        const response = []
        for (const item in rawResourceSum) {
            response.push({ "item_name": item, "yields": rawResourceSum[item] })
        }

        return response
    }


}

module.exports = CalculatorService