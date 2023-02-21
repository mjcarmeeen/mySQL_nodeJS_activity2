

const mysql = require('../../database/mysql')

const insertProduct = (req, res) => {
    // Get query parameters
    const { type, model } = req.query

    // Check if type and model are declared
    let missingField = []
    

    if(!type) missingField.push("type")
    if(!model) missingField.push("model")

    if(missingField.length > 0) throw res.json({ message: `Missing required fields: ${missingField.join(", ")}` })

    // Build the query
    const query = `INSERT INTO uniqlo_product VALUES (null, "${type}", "${model}")`


    // Execute the query 
    return mysql.query(query, (error, result) => {
        
        // Error handling, throw error if there is one
        if(error) throw res.json({ message: error})

        // Return the result if no error
        res.json({ message: "Product inserted successfully"})
    })
}


module.exports = insertProduct
