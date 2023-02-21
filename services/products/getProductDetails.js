const mysql = require('../../database/mysql')

const getProductDetails = (req, res) => {
    const {type} = req.query
    //checking if the input is correct
    if (!type) throw res.json({message: 'product ype error!'})
    //selecting database
    let query = `SELECT * FROM uniqlo_product WHERE product_type like '%${type}%';`

    //execute query    
    return mysql.query(query , (error, result) => {
        //error handling
        if(error) throw res.send({ message: error})
        if(result.length === 0) return res.json ({message: 'product not found'})
        res.send(result)


    })
}
module.exports = getProductDetails