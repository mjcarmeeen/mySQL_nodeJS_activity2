const getListProducts = require('./products/getListProducts')
const getProductDetails = require('./products/getProductDetails')
const purchaseProduct = require('./products/purchaseProduct')
const transactionHistory = require('./products/transactionHistory')
const insertProduct = require('./products/insertProduct')
const updateProduct = require('./products/updateProduct')



module.exports = {
    getListProducts,
    getProductDetails,
    purchaseProduct,
    transactionHistory,
    insertProduct,
    updateProduct
}