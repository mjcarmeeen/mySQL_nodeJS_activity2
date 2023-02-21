const mysql = require('../../database/mysql')

const transactionHistory = (req, res) => {
    //calling mysql database
    const query = ` SELECT * FROM purchase_transaction;`
    //build parameter
    return mysql.query(query, (error, result) => {
        //error handling
        if(error) throw res.json({message: error})
        res.json(result)
    })
}

module.exports = transactionHistory