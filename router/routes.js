const express = require('express')
const router = express.Router()

const productFunctions = require('../services/function')

router.get('/getListProducts', productFunctions.getListProducts)
router.post('/getProductDetails', productFunctions.getProductDetails)
router.post('/purchaseProduct', productFunctions.purchaseProduct)
router.get('/transactionHistory', productFunctions.transactionHistory)
router.post("/insertProduct", productFunctions.insertProduct)
router.post("/updateProduct", productFunctions.updateProduct)

module.exports = router