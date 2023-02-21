const mysql = require('../../database/mysql')
    //setting the parameters
const getListProducts = (req,res) => {
    const{ page, limit, search } = req.query
    //select database from mysql
    let query = `SELECT * FROM uniqlo_product`
    //search query
    if (search) query += ` WHERE product_model LIKE '%${search}$'`
    //limit
    if (limit) query += ` LIMIT ${limit}`
    //page offset 
    if (page && page > 1) query += `, ${page - 1 * limit}`
    //execute the query
    return mysql.query(query , (error, result) => {
        //error handling
        if(error) throw res.send({ message: error})
        //if no error then
        res.send(result)
    })
}

module.exports = getListProducts