    //  updateProduct

const mysql = require('../../database/mysql')

const updateProduct = (req, res) => {
    // Get query parameters
    const { id, type, model } = req.query

    // Check if  id, type, and model are declared
    let missingField = []

    if(!id) missingField.push("id")
    if(!type) missingField.push("type")
    if(!model) missingField.push("model")

    if(missingField.length > 0) throw res.json({ message: `Missing required fields: ${missingField.join(", ")}`})

    // Build the query
    const query = `UPDATE uniqlo_product SET product_type ='${type}', product_model = '${model}' WHERE product_id = '${id}';`

    // Execute the query
    return mysql.query(query, (error, result) => {

        // Error handling, throw error if there is one
        if(error) throw res.json({ message: error })

        // Return the result if no error
        return res.json({ message: "Product successfully updated" })
    })

}

module.exports = updateProduct
