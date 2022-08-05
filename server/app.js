const express = require('express')
const app = express()
const mysql = require('mysql2')
const port = 8001
const cors = require('cors')
require('./db/conn')
const router = require('./Routes/router')

// middleware
app.use(express.json())
app.use(cors())
app.use(router)

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))