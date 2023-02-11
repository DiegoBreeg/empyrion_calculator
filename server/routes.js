const express = require('express')
const path = require("path")
const ItemController = require('./controllers/item.controller')
const CalculatorController = require('./controllers/calculator.controller')
const router = express.Router()


const itemController = new ItemController
const calculatorController = new CalculatorController()

router.get('/', (req, res) => res.status(200).sendFile(path.join(path.resolve(), 'public', 'html', 'register.html')))


router.get('/items', itemController.read)
router.get('/items/:item_name', itemController.read)
router.post('/items', itemController.create)
router.put('/items/:item_name', itemController.update)
router.get('/calculator', calculatorController.calculate)

module.exports = router