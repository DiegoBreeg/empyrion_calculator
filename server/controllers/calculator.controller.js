const CalculatorService = require("../services/calculator.service")


class CalculatorController {
    async calculate(req, res) {
        const { query } = req
        const calculateService = new CalculatorService()
        const response = await calculateService.execute(query)
        return res.status(200).json(response)
    }
}

module.exports = CalculatorController