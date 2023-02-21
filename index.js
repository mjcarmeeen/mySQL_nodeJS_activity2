const express = require('express')
const parser = require('body-parser')
const connection = require('./database/mysql')
const routes = require('./router/routes')

const app = express()

const port = 3001


app.use("/", routes)

app.listen(port, () => {
    console.log("listening to port: " , port)
})