const mysql = require ('../../database/mysql')

const purchaseProduct = (req, res) => {
     //query parameters
    const{inventoryID, quantity} = req.query
    
    let missingField = []
    //checking the input if declared properly
    if(!inventoryID) missingField.push("inventoryID")
    if(!quantity) missingField.push("quantity")

    if(missingField.length > 0 ) throw res.json({messag: `missing req. fields: ${missingField.join(", ")}`})
    //build the query
    const query = `CALL purchaseTransaction(${inventoryID}, ${quantity})`
    //execute the query
    return mysql.query(query, (error, result) =>{
        //error handling
        if(error) throw res.json({message: error})
        //if there is no error..
        return res.json({message: "purchase successful"})
    })

}

module.exports = purchaseProduct